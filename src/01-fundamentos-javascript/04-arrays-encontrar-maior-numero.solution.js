import { test, expect } from "vitest";

// Encontrar o Maior Número
// Objetivo: Encontrar o maior número em um array.
// Entrada: [3, 5, 7, 1, 6]
// Saída: 7
function findMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("encontra o maior número em um array", () => {
  expect(findMax([3, 5, 7, 1, 6])).toBe(7);
  expect(findMax([-1, -3, -5, -7])).toBe(-1);
  expect(findMax([10])).toBe(10);
  expect(findMax([])).toBe(null);
});
