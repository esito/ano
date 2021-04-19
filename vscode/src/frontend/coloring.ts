import * as vscode from "vscode";
import { getColors, ColorEnum, ColorNode } from "../backend/colorizer";

function wrapNode(line: number, col: number, name: string): vscode.Range {
  const from = new vscode.Position(line - 1, col);
  const lines = name.split("\n");
  const to =
    lines.length > 1
      ? new vscode.Position(
          line - 2 + lines.length,
          lines[lines.length - 1].length
        )
      : new vscode.Position(line - 1, col + name.length);
  return new vscode.Range(from, to);
}

const colorNums = initColorNums();
const colorMap = initColorMap();

function initColorNums() {
  return Object.keys(ColorEnum)
    .filter((key) => !isNaN(Number(key)))
    .map((key) => Number(key));
}

function initColorMap() {
  const map = new Map<number, vscode.TextEditorDecorationType>();
  colorNums.forEach((i) => {
    let deko: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType(
      {
        color: new vscode.ThemeColor(`ano.${ColorEnum[i]}`),
      }
    );
    if (i == ColorEnum.Error) {
      deko = vscode.window.createTextEditorDecorationType({
        textDecoration: "underline dotted red",
      });
    }
    map.set(i, deko);
  });
  return map;
}

export function updateDecorations(editor: vscode.TextEditor) {
  const map = new Map<ColorEnum, vscode.Range[]>();
  colorNums.forEach((i) => map.set(i, []));
  getColors().forEach((x) =>
    map.get(x.color)?.push(wrapNode(x.line, x.col, x.word))
  );

  colorNums.forEach((i) =>
    editor.setDecorations(
      <vscode.TextEditorDecorationType>colorMap.get(i),
      <vscode.Range[]>map.get(i)
    )
  );
}
