// ==UserScript==
// @name         StackExchange "Hot Questions" section remover
// @namespace    https://simonandre.ws/
// @version      2024-02-29
// @description  Removes the "Hot Questions" section of the sidebar on StackExchange websites
// @author       Simon Andrews
// @match        https://*.stackexchange.com/*
// @match        https://stackoverflow.com/*
// @match        https://serverfault.com/*
// @match        https://superuser.com/*
// @match        https://askubuntu.com/*
// @match        https://meta.stackoverflow.com/*
// @match        https://meta.serverfault.com/*
// @match        https://meta.superuser.com/*
// @match        https://meta.askubuntu.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const element = document.getElementById("hot-network-questions");
  if (element) {
    element.remove();
  }
})();
