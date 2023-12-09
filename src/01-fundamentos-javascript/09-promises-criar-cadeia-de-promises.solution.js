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

export default function transformString(str) {
  return toUpperCase(str).then(reverseString).then(replaceSpacesWithHyphens);
}
