async function carregarDados() {
  var resposta = await fetch("http://localhost:3000/products");
  var dados = await resposta.json();

  dados.forEach(function (meuItem) {
    var meuProdutoHTML = `<div class="conteiner_cartas">
        <div class="conteiner_imagem">
          <img
            src="${meuItem.imagem}"
            alt="${meuItem.descricao}"
          />
        </div>
        <div class="conteiner_descricao">
          <h3>${meuItem.nome}</h3>
          <p>${meuItem.raridade}</p>
          <p>${meuItem.descricao}</p>
          <div class="conteiner_preco">
            <p>Preço: R$${meuItem.preco},00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>`;

    document
      .getElementById("lista")
      .insertAdjacentHTML("afterbegin", meuProdutoHTML);
  });
}

carregarDados();
