
document.addEventListener("DOMContentLoaded", function () {

    // o documento será carregado após a janela, mesmo considerando
    // que o listener da janela foi declarado depois (não segura o interpretador)
    console.log("O documento foi carregado após a janela.");

    let _cabecalho = document.getElementById("cabecalho")

    console.log("Primeira substituição do título")
    _cabecalho.innerHTML = "O valor do título foi substituído por isso aqui"


}, true);

window.addEventListener('DOMContentLoaded', function () {

    console.log("A janela foi carregada antes do documento.");

    const cabecalho = document.createElement("h1");
    const texto_cabecalho = document.createTextNode("Olha, um título dinâmico!");

    const curtidas = document.createElement("curtidas")
    const qtd = document.createTextNode("0")
    // adiciona um id ao objeto
    // pode adicionar outros atributos também, sem erro
    // classe CSS, src (link) ou mesmo um inventado por você
    cabecalho.setAttribute("id", "cabecalho");
    cabecalho.setAttribute("class", "titulo");
    cabecalho.setAttribute("atributo-inventado", "valor-inventado");
    curtidas.setAttribute("id","curtidas")


    curtidas.appendChild(qtd)
    document.body.appendChild(curtidas)
    cabecalho.appendChild(texto_cabecalho);
    document.body.appendChild(cabecalho);

}, true);

document.addEventListener("DOMContentLoaded",function () {
    let ncliques=0

    botao_=document.getElementById('botao')
    botao_.addEventListener('click', function(event){
        console.log('o botão foi clicado')
        ncliques++
        let _curtidas = document.getElementById("curtidas")
        console.log("+1 curtida")
        _curtidas.innerHTML = ncliques

    }, false);
}, true);
