// Exercício: Verificação de Palíndromo
// Objetivo: Verificar se uma string é um palíndromo (a mesma palavra se lida de trás para frente).
// Entrada: "radar".
// Saída: "É um palíndromo".
export default function isPalindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
