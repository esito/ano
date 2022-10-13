import { readFileSync } from "fs";
import path = require("path");

export function readMarkdown(name: string) {
  const map = new Map<string, string[]>();
  //Create output channel

  const lines = readFileSync(path.resolve(__dirname, name), "utf8")
    .toString()
    .replace(/[\r]+/g, "")
    .split("\n");
  let arr: string[];

  lines.forEach((x) => {
    if (x.startsWith("## ")) {
      arr = [];
      map.set(x.substring(3), arr);
    } else {
      arr.push(x);
    }
  });
  return map;
}
