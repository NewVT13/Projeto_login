document
  .getElementById("form_pesquisa")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    var cep = document.getElementById("input_cep").value;

    var url = `https://viacep.com.br/ws/${cep}/json/`;

    var resposta = await fetch(url);
    var dados = await resposta.json();

    document.getElementById("bairro_info").innerText = dados.bairro;
    document.getElementById("logradouro_info").innerText = dados.logradouro;
    document.getElementById("localidade_info").innerText = dados.localidade;
    document.getElementById("estado_info").innerText = dados.estado;

    document.getElementById("input_cep").value = "";
  });
