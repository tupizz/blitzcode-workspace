import { test, expect } from "vitest";

// Converter Temperatura
// Objetivo: Converter temperatura de Celsius para Fahrenheit.
// Entrada: 30 (Celsius)
// Saída: 86 (Fahrenheit)
function celsiusToFahrenheit(celsius) {
  return 0;
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("converte temperatura de Celsius para Fahrenheit", () => {
  expect(celsiusToFahrenheit(30)).toBe(86);
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});
