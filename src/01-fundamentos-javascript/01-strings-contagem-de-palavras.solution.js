// Exercício: Contagem de Palavras
// Objetivo: Escreva um programa que conte o número de palavras em uma string.
// Entrada: Uma string de entrada.
// Saída: Número de palavras na string.
export default function countWords(str) {
  return str.split(/\s+/).filter(Boolean).length;
}
