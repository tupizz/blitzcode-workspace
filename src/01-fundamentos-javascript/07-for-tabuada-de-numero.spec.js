import path from "path";
import { expect, test } from "vitest";

function getCurrentFileName() {
  const fileUrl = new URL(import.meta.url);
  const es6FileName = path.basename(fileUrl.pathname);
  return es6FileName;
}

async function loadFunction() {
  const currentFileName = getCurrentFileName();
  const baseName = currentFileName.replace('spec.js', '');
  const moduleName = process.env.IS_PROBLEM === 'true' ? `${baseName}problem` : `${baseName}solution`;

  const module = await import(`./${moduleName}`);
  return module.default;
}
// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("gera a tabuada de um número", async () => {
  const generateMultiplicationTable = await loadFunction();

  const expectedTable = [
    "3 x 1 = 3",
    "3 x 2 = 6",
    "3 x 3 = 9",
    "3 x 4 = 12",
    "3 x 5 = 15",
    "3 x 6 = 18",
    "3 x 7 = 21",
    "3 x 8 = 24",
    "3 x 9 = 27",
    "3 x 10 = 30",
  ];
  expect(generateMultiplicationTable(3)).toEqual(expectedTable);
});
