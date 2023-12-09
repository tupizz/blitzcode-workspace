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
test('verifica se uma string é um palíndromo', async () => {
  const isPalindrome = await loadFunction();
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome('')).toBe(true);
  expect(isPalindrome('abc')).toBe(false);
  expect(isPalindrome('aba')).toBe(true);
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});
