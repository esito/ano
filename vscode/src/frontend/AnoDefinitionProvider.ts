import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  DefinitionProvider,
  Location,
  LocationLink,
  Range,
} from "vscode";
import { getDefinition } from "../backend/navigation";

export class AnoDefinitionProvider implements DefinitionProvider {
  provideDefinition(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Location | Location[] | LocationLink[]> {
    const def = getDefinition(position.line + 1, position.character);
    if (def)
      return [
        new Location(
          document.uri,
          new Range(
            new Position(def?.line - 1, def?.col),
            new Position(def?.line - 1, def?.col + def.word.length)
          )
        ),
      ];
    return null;
  }
}
