// ==UserScript==
// @name         Sports Injury Predictor Premium Access Remover
// @namespace    https://h01000110.github.io/20170823/sportsinjurypredictor-premium-access-remover
// @version      0.1
// @description  enjoy all statistics from Sports Injury Predictor
// @author       h01000110
// @match        http://sportsinjurypredictor.com/*
// @updateURL    https://github.com/h01000110/js-scripts/raw/master/sportsinjurypredictor-premium-access-remover.user.js
// @downloadURL  https://github.com/h01000110/js-scripts/raw/master/sportsinjurypredictor-premium-access-remover.user.js
// @grant        none
// ==/UserScript==

/* AUTOMATIC MODE *//*
var bod = document.getElementsByTagName("body")[0];
var scri = bod.getElementsByTagName("script")[13];
bod.removeChild(scri);

setTimeout(function () {
    var hed = document.getElementsByTagName("head")[0];
    var scrip = hed.getElementsByTagName("script")[8];
    hed.removeChild(scrip);

    var overs = bod.getElementsByClassName("tp-style")[0];
    var overl = bod.getElementsByClassName("tp-reset");
    bod.removeChild(overl[0]);
    bod.removeChild(overl[0]);
    bod.removeChild(overs);
    console.log("Enabled.");
}, 5000);
/* END - AUTOMATIC MODE */

/* MANUAL MODE */
var bod = document.getElementsByTagName("body")[0];

function activate () {
    var scri = bod.getElementsByTagName("script")[13];
    bod.removeChild(scri);

    setTimeout(function () {
        var hed = document.getElementsByTagName("head")[0];
        var scrip = hed.getElementsByTagName("script")[8];
        hed.removeChild(scrip);

        var overs = bod.getElementsByClassName("tp-style")[0];
        var overl = bod.getElementsByClassName("tp-reset");
        bod.removeChild(overl[0]);
        bod.removeChild(overl[0]);
        bod.removeChild(overs);
        btn.innerText = "Enabled";
        btn.style.background = "rgb(191, 30, 46)";
    }, 1000);
}

var btn = document.createElement("span");
btn.innerText = "Disabled";
btn.style.position = "fixed";
btn.style.bottom = "0px";
btn.style.left = "0px";
btn.style.lineHeight = "14px";
btn.style.fontWeight = "bold";
btn.style.background = "#1fa050";
btn.style.padding = "4px 7px";
btn.style.zIndex = "999999";
btn.style.cursor = "pointer";
bod.appendChild(btn);

btn.addEventListener('click', activate, false);
/* END - MANUAL MODE */