// ==UserScript==
// @name        Hacker news - Dark
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/*
// @grant       none
// @version     1.0
// @author      -
// @description styling it a bit
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
#hnmain, body { background-color: #222222 !important; }
.rank, .score, .clicky { color: #FF6600 !important; }
.titlelink, .yclinks a, center a, .comment .commtext, .subtext { color: white !important; }
.votearrow { display: none !important; }
.sitestr, .hnuser, .subtext > a[href^="item"] { color: #ff944c !important; }
.itemlist a:visited { color: #BF6F39 !important; } //75% as bright as unvisited
`);
