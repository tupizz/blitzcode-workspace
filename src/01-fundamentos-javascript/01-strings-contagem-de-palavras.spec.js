import { expect, test } from 'vitest'

console.log('oi')
// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test('conta o número de palavras em uma string', async () => {
  let countWords
  if(process.env.IS_PROBLEM === 'true') {
    countWords = (await import(`./01-strings-contagem-de-palavras.problem`)).default;
  } else {
    countWords = (await import(`./01-strings-contagem-de-palavras.solution`)).default;
  }

  expect(countWords('Olá mundo')).toBe(2);
  expect(countWords('')).toBe(0);
  expect(countWords('Esta é uma frase de teste')).toBe(6);
  expect(countWords('  Espaços  em  branco  ')).toBe(3);
});
