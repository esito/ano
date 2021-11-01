import * as vscode from "vscode";
import { createAnoHolder, setActiveAno } from "./backend/anoclass";
import { updateDecorations } from "./frontend/coloring";
import { AnoHoverProvider } from "./frontend/AnoHoverProvider";
import { AnoDefinitionProvider } from "./frontend/AnoDefinitionProvider";
import { AnoReferenceProvider } from "./frontend/AnoReferenceProvider";
import { AnoCompletionItemProvider } from "./frontend/AnoCompletionItemProvider";
import { AnoRenameProvider } from "./frontend/AnoRenameProvider";
import { AnoDocumentFormattingEditProvider } from "./frontend/AnoDocumentFormattingEditProvider";

const ANO = { language: "ano", scheme: "file" };
const isAnoFile = (document?: vscode.TextDocument | undefined): boolean =>
  document
    ? document.languageId === "ano" && document.uri.scheme === "file"
    : false;

// this method is called when vscode is activated for "ano"
export function activate(context: vscode.ExtensionContext) {
  let activeEditor = vscode.window.activeTextEditor;

  function triggerUpdateDecorations() {
    if (!isAnoFile(activeEditor?.document)) return;

    if (activeEditor) {
      const ano = createAnoHolder(activeEditor.document.getText());
      setActiveAno(() => ano);
      updateDecorations(activeEditor);
    }
  }

  if (activeEditor) {
    triggerUpdateDecorations();
  }
  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      activeEditor = editor;
      if (editor) {
        triggerUpdateDecorations();
      }
    },
    null,
    context.subscriptions
  );

  vscode.workspace.onDidChangeTextDocument(
    async (event) => {
      if (activeEditor && event.document === activeEditor.document) {
        await triggerUpdateDecorations();
      }
    },
    null,
    context.subscriptions
  );
  const lang = vscode.languages;
  context.subscriptions.push(
    lang.registerReferenceProvider(ANO, new AnoReferenceProvider()),
    lang.registerDefinitionProvider(ANO, new AnoDefinitionProvider()),
    lang.registerRenameProvider(ANO, new AnoRenameProvider()),
    lang.registerHoverProvider(ANO, new AnoHoverProvider()),
    lang.registerCompletionItemProvider(ANO, new AnoCompletionItemProvider()),
    lang.registerDocumentFormattingEditProvider(
      ANO,
      new AnoDocumentFormattingEditProvider()
    )
  );
}
