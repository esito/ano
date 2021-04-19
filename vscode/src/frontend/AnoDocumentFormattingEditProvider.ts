import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Range,
  DocumentFormattingEditProvider,
  FormattingOptions,
  TextEdit,
} from "vscode";
import { formatDoc } from "../backend/formatter";

export class AnoDocumentFormattingEditProvider
  implements DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(
    document: TextDocument,
    options: FormattingOptions,
    token: CancellationToken
  ): ProviderResult<TextEdit[]> {
    const indenting = options.insertSpaces ? " ".repeat(options.tabSize) : "\t";
    const edits = formatDoc(indenting);
    const list: TextEdit[] = [];
    // Add edits for places where whitespace has changed
    edits.forEach((x) => {
      const range = new Range(
        new Position(x?.line1 - 1, x?.col1),
        new Position(x?.line2 - 1, x?.col2)
      );
      const txt = document.getText(range);
      if (txt != x.text) {
        list.push(new TextEdit(range, x.text));
      }
    });
    return list;
  }
}
