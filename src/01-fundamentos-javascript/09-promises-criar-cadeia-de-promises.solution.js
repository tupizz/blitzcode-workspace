import { test, describe, expect } from "vitest";

// Exercício: Cadeia de Promises
// Objetivo: Criar uma cadeia de Promises que transforme dados através de várias etapas.
// Desafio:
//      Primeira Promise: Converte uma string para maiúsculas.
//      Segunda Promise: Reverte a string resultante.
//      Terceira Promise: Substitui espaços por hifens.
// Entrada: "JavaScript Promises"
// Saída Esperada: "SESIMORP-TPIRCSAVA"

function toUpperCase(str) {
  return Promise.resolve(str.toUpperCase());
}

function reverseString(str) {
  return Promise.resolve(str.split("").reverse().join(""));
}

function replaceSpacesWithHyphens(str) {
  return Promise.resolve(str.replace(/\s/g, "-"));
}

function transformString(str) {
  return toUpperCase(str).then(reverseString).then(replaceSpacesWithHyphens);
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
describe("Cadeia de Promises", () => {
  test("a função retorna uma Promise", () => {
    const result = transformString("");
    expect(result).toBeInstanceOf(Promise);
  });

  test("transforma uma string através de uma cadeia de Promises", async () => {
    const input = "JavaScript Promises";
    const expectedOutput = "SESIMORP-TPIRCSAVAJ";
    const result = await transformString(input);
    expect(result).toBe(expectedOutput);
  });
});
