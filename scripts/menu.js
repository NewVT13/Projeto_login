/* <><div class="menu">
    <h1 class="logo_name">GeekShop</h1>
    <div class="conteiner_direita_menu">
        <ul>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
        <div class="carrinho_icone_conteiner">
            <img src="../../imagens/cart.svg" alt="" />
        </div>
    </div>
</div><div class="conteiner_principal">
        <h1>Bem-vindo à GeekShop</h1>
        <p>Encontre as melhores cartas colecionáveis para sua coleção</p>
        <button>Explorar</button>
    </div></> */

function carregarMenu() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="menu">
    <h1 class="logo_name">GeekShop</h1>
    <div class="conteiner_direita_menu">
        <ul>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
        <div class="carrinho_icone_conteiner">
            <img src="../../imagens/cart.svg" alt="" />
        </div>
    </div>
</div>`,
  );
}

carregarMenu();
