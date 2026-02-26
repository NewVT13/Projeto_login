/*
 <div class="conteiner_cartas">
        <div class="conteiner_imagem">
          <img
            src="https://repositorio.sbrauble.com/arquivos/in/pokemon_bkp/cd/738/6924ac1ff1bb1-8t6ug-w0jnu-6386cdd1635c69bcd3f1e8f5ea9c84f1.jpg"
            alt="mega charizard card"
          />
        </div>
        <div class="conteiner_descricao">
          <h3>Mega Charizard X</h3>
          <p>Ultra rara</p>
          <p>Charizard preto com azul</p>
          <div class="conteiner_preco">
            <p>Preço: R$200,00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>*/

const produtos = [
  {
    id: 1,
    nome: "Slowpoke",
    raridade: "normal",
    preço: 40,
    descricao: "Slowpoke na praia",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/2209/pokemon_pre_018_131/pokemon_pre_018_131_pt.jpg",
  },
  {
    id: 2,
    nome: "Vulpix",
    raridade: "normal",
    preço: 85,
    descricao: "Vulpix sentado",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/273/pokemon_ex_136_165/pokemon_ex_136_165_en.jpg",
  },
  {
    id: 3,
    nome: "Alakazam",
    raridade: "normal",
    preço: 100,
    descricao: "Alakazam de pé",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/281/pokemon_b2_001/pokemon_b2_001_en.jpg",
  },
  {
    id: 4,
    nome: "Noibat",
    raridade: "normal",
    preço: 50,
    descricao: "Noibat andando",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/2422/pokemon_asc_156_217/pokemon_asc_156_217_pt.jpg",
  },
  {
    id: 5,
    nome: "Mega Venusa",
    raridade: "normal",
    preço: 300,
    descricao: "Mega Venusa art",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/2369/pokemon_mep_013/pokemon_mep_013_pt.jpg",
  },
  {
    id: 6,
    nome: "Ninetales",
    raridade: "Normal",
    preço: 65,
    descricao: "Ninetales na mata",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/273/pokemon_ex_021_165/pokemon_ex_021_165_en.jpg",
  },
  {
    id: 7,
    nome: "Glaceon ",
    raridade: "raro",
    preço: 150,
    descricao: "Glaceon on ice",
    imagem:
      "https://img.mypcards.com/cdn-cgi/image/h=425,fit=contain,f=auto//img/2/2209/pokemon_pre_025_131/pokemon_pre_025_131_en.jpg",
  },
];

produtos.forEach(function (meuItem) {
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
            <p>Preço: R$${meuItem.preço},00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>`;

  document
    .getElementById("lista")
    .insertAdjacentHTML("afterbegin", meuProdutoHTML);
});
