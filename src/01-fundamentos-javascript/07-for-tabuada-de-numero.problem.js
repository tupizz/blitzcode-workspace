import { test, expect } from "vitest";

// Tabuada
// Objetivo: Gerar a tabuada de um número.
// Entrada: 3
// Saída: 3 x 1 = 3, 3 x 2 = 6, ..., 3 x 10 = 30
function generateMultiplicationTable(number) {
  return [];
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("gera a tabuada de um número", () => {
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
