import { test, expect } from "vitest";

// Exercício: Gerador de Slug
// Objetivo: Criar um slug (parte de URL amigável) a partir de um título de postagem de blog.
// Entrada: "Como aprender Node.js em 2023".
// Saída: "como-aprender-node-js-em-2023".
function generateSlug(title) {
  return title
    .normalize("NFD")                     // Normaliza a string
    .replace(/[\u0300-\u036f]/g, "")      // Remove acentos
    .toLowerCase()
    .trim()                               // Remove espaços no início e no fim
    .replace(/[\s+]/g, "-")               // Substitui espaços por hifens
    .replace(/[^\w\-]+/g, "")             // Remove caracteres não alfanuméricos
    .replace(/\-\-+/g, "-");              // Substitui múltiplos hifens por um único
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("gera um slug a partir de um título de postagem", () => {
  expect(generateSlug("Como aprender Node.js em 2023")).toBe(
    "como-aprender-nodejs-em-2023"
  );
  expect(generateSlug("  Espaços  em  Branco  ")).toBe("espacos-em-branco");
  expect(generateSlug("Caracteres@Especiais#$")).toBe("caracteresespeciais");
});
