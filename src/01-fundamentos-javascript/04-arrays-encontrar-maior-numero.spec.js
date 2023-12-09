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
test("encontra o maior número em um array", async () => {
  const findMax = await loadFunction();
  expect(findMax([3, 5, 7, 1, 6])).toBe(7);
  expect(findMax([-1, -3, -5, -7])).toBe(-1);
  expect(findMax([10])).toBe(10);
  expect(findMax([])).toBe(null);
});
