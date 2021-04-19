import * as vscode from "vscode";
import { getCompletion } from "../backend/completion";

// Completions
export class AnoCompletionItemProvider
  implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ) {
    let text = document.getText(
      new vscode.Range(new vscode.Position(position.line, 0), position)
    );
    let i = text.length;
    for (; i > 0; i--) {
      const ch = text.charAt(i - 1);
      if (
        !(
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z") ||
          (ch >= "0" && ch <= "9")
        )
      )
        break;
    }
    text = text.substring(i);

    const result = getCompletion(position.line + 1, position.character, text);
    const completions = result.map((x) => new vscode.CompletionItem(x));
    return completions;
  }
}
