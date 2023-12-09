import { expect, test } from "vitest";

// Exercício: Verificação de Palíndromo
// Objetivo: Verificar se uma string é um palíndromo (a mesma palavra se lida de trás para frente).
// Entrada: "radar".
// Saída: "É um palíndromo" então retornaremos true.
function isPalindrome(str) {
  return 0;
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test('verifica se uma string é um palíndromo', () => {
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome('')).toBe(true);
  expect(isPalindrome('abc')).toBe(false);
  expect(isPalindrome('aba')).toBe(true);
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});
