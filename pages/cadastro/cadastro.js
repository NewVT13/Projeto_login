function cadastrarProduto(event) {
  event.preventDefault();

  fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("nome_produto").value,
      raridade: document.getElementById("raridade").value,
      preco: document.getElementById("preco").value,
      descricao: document.getElementById("descricao").value,
      imagem: document.getElementById("imagem_url").value,
    }),
    headers: { "Content-Type": "application/json" },
  });
}

document
  .getElementById("form_produto")
  .addEventListener("submit", cadastrarProduto);
