// Encontrar o Maior Número
// Objetivo: Encontrar o maior número em um array.
// Entrada: [3, 5, 7, 1, 6]
// Saída: 7
export default function findMax(numbers) {
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
