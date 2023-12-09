// Exercício: Gerador de Slug
// Objetivo: Criar um slug (parte de URL amigável) a partir de um título de postagem de blog.
// Entrada: "Como aprender Node.js em 2023".
// Saída: "como-aprender-node-js-em-2023".
export default function generateSlug(title) {
  return title
    .normalize("NFD")                     // Normaliza a string
    .replace(/[\u0300-\u036f]/g, "")      // Remove acentos
    .toLowerCase()
    .trim()                               // Remove espaços no início e no fim
    .replace(/[\s+]/g, "-")               // Substitui espaços por hifens
    .replace(/[^\w\-]+/g, "")             // Remove caracteres não alfanuméricos
    .replace(/\-\-+/g, "-");              // Substitui múltiplos hifens por um único
}
