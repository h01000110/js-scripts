// ==UserScript==
// @name         Corrigindo sites Globo
// @namespace    https://h01000110.github.io/20171013/corrigindo-a-globo
// @version      0.1
// @description  corrija os sites da Globo, melhore sua vida!
// @author       h01000110
// @match        http://*.globo.com/*
// @match        https://*.globo.com/*
// @updateURL    https://github.com/h01000110/js-scripts/raw/master/correcao-globo.user.js
// @downloadURL  https://github.com/h01000110/js-scripts/raw/master/correcao-globo.user.js
// @grant        none
// ==/UserScript==

function Correcao () {
    var conteudoBosta = document.getElementsByTagName("html")[0];
    var head = document.createElement("head");
    var body = document.createElement("body");
    conteudoBosta.innerHTML = "";
    var salvacao = document.createElement("h1");
    salvacao.style.fontSize = "25px";
    salvacao.style.fontWeight = "bold";
    salvacao.innerHTML = 'Melhore sua vida, pare de ler/assistir esse lixo. Visite <a href="http://pudim.com.br/">pudim.com.br</a>';
    conteudoBosta.appendChild(head);
    conteudoBosta.appendChild(body);
    body.appendChild(salvacao);
    var creditos = document.createElement("p");
    creditos.style.position = "absolute";
    creditos.style.bottom = "5px";
    creditos.style.right = "5px";
    creditos.innerHTML = 'by: <a href="https://h01000110.github.io">h01000110</a>';
    body.appendChild(creditos);
}

window.onscroll = Correcao();
window.onload = Correcao();