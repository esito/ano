import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Range,
  RenameProvider,
  WorkspaceEdit,
} from "vscode";
import { getRenames } from "../backend/navigation";

export class AnoRenameProvider implements RenameProvider {
  provideRenameEdits(
    document: TextDocument,
    position: Position,
    newName: string,
    token: CancellationToken
  ): ProviderResult<WorkspaceEdit> {
    const refs = getRenames(position.line + 1, position.character);
    const wsedit = new WorkspaceEdit();
    const locs = refs.map((def) => {
      const range = new Range(
        new Position(def?.line - 1, def?.col),
        new Position(def?.line - 1, def?.col + def.word.length)
      );
      wsedit.replace(document.uri, range, newName);
    });
    return wsedit;
  }
}
