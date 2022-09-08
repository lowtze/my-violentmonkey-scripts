// ==UserScript==
// @name        Hacker news - Dark
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/*
// @grant       none
// @version     1.1
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
* { line-height: 1.6 !important; }
#hnmain, body { background-color: #222222 !important; }
.rank, .hnuser { color: #FF6600 !important; }
.titlelink, .yclinks a, center a, .comment .commtext, .subtext { color: white !important; }
.votearrow { display: none !important; }
.sitestr, .score, .subtext > a[href^="item"], span.navs > a:last-child { color: #ff944c !important; }
.itemlist a:visited { color: #BF6F39 !important; }
div.comment { max-width: 60em !important; }
`);