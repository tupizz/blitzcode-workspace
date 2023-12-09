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
test("mescla dois objetos em um só", async () => {
  const mergeObjects = await loadFunction();

  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const expected = { a: 1, b: 2, c: 3, d: 4 };
  expect(mergeObjects(obj1, obj2)).toEqual(expected);

  // Testar com objetos vazios
  expect(mergeObjects({}, {})).toEqual({});

  // Testar com propriedades sobrepostas
  expect(mergeObjects({ a: 1 }, { a: 2, b: 3 })).toEqual({ a: 2, b: 3 });
});
