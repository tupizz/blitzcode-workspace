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
describe("Promises com Timeout", () => {
  test("a função retorna uma Promise", async () => {
    const promiseWithTimeout = await loadFunction();
    const result = promiseWithTimeout();
    expect(result).toBeInstanceOf(Promise);
  });

  test("resolve a Promise ou retorna erro de timeout", async () => {
    const promiseWithTimeout = await loadFunction();

    try {
      const result = await promiseWithTimeout();
      // expect that the function returns a promise
      expect(result).toBe("Operação bem-sucedida");
    } catch (error) {
      expect(error.message).toBe("Timeout Error");
    }
  });
});
