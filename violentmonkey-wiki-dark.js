// ==UserScript==
// @name        Wiki - Dark - My Style
// @namespace   Violentmonkey Scripts
// @match       https://*.wikipedia.org/*
// @match       https://*.wiktionary.org/*
// @grant       none
// @version     1.0
// @author      lowtze
// @description works on Wikipedia and Wiktionary mostly; may be some dirty bits that need fixing
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(`
* { background-color: #222222 !important; font-size: max(1em, 12px) !important; } 
h1, h2, h3, h4, h5, h6, p, ul, ol, li, th, tr, td, div, caption, input, code { color: white !important; } 
a, span a, abbr, label, .tpos a { color: #ffcc66 !important; } 
img, #p-logo a { background-color: white !important; } 
div { background-image: none !important; } 
.mw-tmh-player, .mw-tmh-play { background-color: initial !important; } //movie player
`);