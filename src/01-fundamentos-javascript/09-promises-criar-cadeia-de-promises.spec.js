import path from "path";
import { expect, test, describe } from "vitest";

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
describe("Cadeia de Promises", () => {
  test("a função retorna uma Promise", async () => {
    const transformString = await loadFunction();
    const result = transformString("");
    expect(result).toBeInstanceOf(Promise);
  });

  test("transforma uma string através de uma cadeia de Promises", async () => {
    const transformString = await loadFunction();
    const input = "JavaScript Promises";
    const expectedOutput = "SESIMORP-TPIRCSAVAJ";
    const result = await transformString(input);
    expect(result).toBe(expectedOutput);
  });
});
