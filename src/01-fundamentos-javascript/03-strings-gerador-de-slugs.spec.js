import path from "path";
import { expect, test } from "vitest";

function getCurrentFileName() {
  const fileUrl = new URL(import.meta.url);
  const es6FileName = path.basename(fileUrl.pathname);
  return es6FileName;
}

async function loadFunction() {
  const currentFileName = getCurrentFileName();
  const baseName = currentFileName.replace('spec.js', '');
  const moduleName = process.env.IS_PROBLEM === 'true' ? `${baseName}problem` : `${baseName}solution`;

  const module = await import(`./${moduleName}`);
  return module.default;
}

// ⚠️ Testes abaixo, para melhor aproveitamento não mexam neles
// ⚠️ foque-se em resolver solução acima
test("gera um slug a partir de um título de postagem", async () => {
  const generateSlug = await loadFunction();

  expect(generateSlug("Como aprender Node.js em 2023")).toBe(
    "como-aprender-nodejs-em-2023"
  );
  expect(generateSlug("  Espaços  em  Branco  ")).toBe("espacos-em-branco");
  expect(generateSlug("Caracteres@Especiais#$")).toBe("caracteresespeciais");
});
