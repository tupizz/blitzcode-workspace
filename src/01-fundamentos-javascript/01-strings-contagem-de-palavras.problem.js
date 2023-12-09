import { expect, test } from 'vitest'

// Exercício: Contagem de Palavras
// Objetivo: Escreva um programa que conte o número de palavras em uma string.
// Entrada: Uma string de entrada.
// Saída: Número de palavras na string.
function countWords(str) {
  return 0;
}


// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test('conta o número de palavras em uma string', () => {
  expect(countWords('Olá mundo')).toBe(2);
  expect(countWords('')).toBe(0);
  expect(countWords('Esta é uma frase de teste')).toBe(6);
  expect(countWords('  Espaços  em  branco  ')).toBe(3);
});
