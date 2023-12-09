// Exercício: Promises com Timeout
// Objetivo: Implementar um timeout para uma Promise.
// Desafio:
//   Criar uma Promise que resolve após um tempo aleatório (entre 1 e 5 segundos).
//   Se a Promise não resolver em 3 segundos, rejeitá-la com um erro de timeout.
// Entrada: N/A
//   Saída Esperada: Resultado da Promise ou "Timeout Error"

export default function promiseWithTimeout() {
  let timeout;
  const randomDelay = Math.floor(Math.random() * 5000) + 1; // Tempo aleatório entre 1 e 5 segundos

  const promise = new Promise((resolve, reject) => {
    timeout = setTimeout(() => {
      reject(new Error("Timeout Error"));
    }, 3000); // Timeout de 3 segundos

    setTimeout(() => {
      clearTimeout(timeout);
      resolve("Operação bem-sucedida");
    }, randomDelay);
  });

  return promise;
}
