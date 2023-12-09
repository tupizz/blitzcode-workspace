import { test, expect } from "vitest";

// Mesclar Dois Objetos
// Objetivo: Mesclar dois objetos em um só.
// Entrada: { a: 1, b: 2 }, { c: 3, d: 4 }
// Saída: { a: 1, b: 2, c: 3, d: 4 }
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("mescla dois objetos em um só", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const expected = { a: 1, b: 2, c: 3, d: 4 };
  expect(mergeObjects(obj1, obj2)).toEqual(expected);

  // Testar com objetos vazios
  expect(mergeObjects({}, {})).toEqual({});

  // Testar com propriedades sobrepostas
  expect(mergeObjects({ a: 1 }, { a: 2, b: 3 })).toEqual({ a: 2, b: 3 });
});
