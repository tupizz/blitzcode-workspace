import { test, expect, describe } from "vitest";

// Exercício: Promises com Timeout
// Objetivo: Implementar um timeout para uma Promise.
// Desafio:
//   Criar uma Promise que resolve após um tempo aleatório (entre 1 e 5 segundos).
//   Se a Promise não resolver em 3 segundos, rejeitá-la com um erro de timeout.
// Entrada: N/A
//   Saída Esperada: Resultado da Promise ou "Timeout Error"

function promiseWithTimeout() {
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

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
describe("Promises com Timeout", () => {
  test("a função retorna uma Promise", () => {
    const result = promiseWithTimeout();
    expect(result).toBeInstanceOf(Promise);
  });

  test("resolve a Promise ou retorna erro de timeout", async () => {
    try {
      const result = await promiseWithTimeout();
      // expect that the function returns a promise
      expect(result).toBe("Operação bem-sucedida");
    } catch (error) {
      expect(error.message).toBe("Timeout Error");
    }
  });
});
