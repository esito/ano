import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  ReferenceProvider,
  Location,
  Range,
  ReferenceContext,
} from "vscode";
import { getReference } from "../backend/navigation";

export class AnoReferenceProvider implements ReferenceProvider {
  provideReferences(
    document: TextDocument,
    position: Position,
    context: ReferenceContext,
    token: CancellationToken
  ): ProviderResult<Location[]> {
    const defs = getReference(position.line + 1, position.character);
    return defs.map(
      (def) =>
        new Location(
          document.uri,
          new Range(
            new Position(def?.line - 1, def?.col),
            new Position(def?.line - 1, def?.col + def.word.length)
          )
        )
    );
  }
}
