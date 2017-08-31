// ==UserScript==
// @name         Personal Config 4 Youtube
// @namespace    https://h01000110.github.io/20170831/personal-config-youtube
// @version      0.1
// @description  open your videos always in theater mode and others features
// @author       h01000110
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @updateURL    https://github.com/h01000110/js-scripts/raw/master/personal-config-youtube.user.js
// @downloadURL  https://github.com/h01000110/js-scripts/raw/master/personal-config-youtube.user.js
// @grant        none
// ==/UserScript==

var ply;
var anot;
var local = location.href;
ply = document.getElementsByTagName("ytd-watch")[0];

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function plyd () {
    if (typeof ply !== "undefined") {
        if (location.href !== "https://www.youtube.com/") {
            // Enable Theater Mode
            ply.setAttribute("theater-requested_", "");
            ply.setAttribute("theater", "");
            /* Uncomment the section below for disabling video annotations
            anot = document.getElementsByClassName("ytp-menuitem-toggle-checkbox")[1];
            var check = setInterval(function() {
                anot = document.getElementsByClassName("ytp-menuitem-toggle-checkbox")[1];
                if (typeof anot !== "undefined") {
                    var verf = document.getElementsByClassName("ytp-player-content")[1];
                    if (verf.style.display === "") {
                        eventFire(anot, 'click');
                    }
                    clearInterval(check);
                }
            }, 1000); /**/
        }
    } else {
        if (location.href !== "https://www.youtube.com/") {
            ply = document.getElementsByTagName("ytd-watch")[0];
            setTimeout(plyd, 500);
        }
    }
}

plyd();

setInterval(function() {
    if(location.href != local) {
        plyd();
        local = location.href;
    }
}, 1000);
