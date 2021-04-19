import {
  TextDocument,
  Position,
  CancellationToken,
  Hover,
  ProviderResult,
  HoverProvider,
  MarkdownString,
} from "vscode";
import { getHover } from "../backend/hovering";

export class AnoHoverProvider implements HoverProvider {
  public provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Hover> {
    const hover: string[] = getHover(position.line + 1, position.character);
    return new Hover(hover.map((x) => new MarkdownString(x)));
  }
}
