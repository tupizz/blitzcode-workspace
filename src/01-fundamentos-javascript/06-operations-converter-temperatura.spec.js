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
test("converte temperatura de Celsius para Fahrenheit", async () => {
  const celsiusToFahrenheit = await loadFunction();
  expect(celsiusToFahrenheit(30)).toBe(86);
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});
