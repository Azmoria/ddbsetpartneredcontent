// ==UserScript==
// @name         Set DDB partner content filter default on
// @namespace    github.com/azmoria
// @version      0.1
// @description  Set default partnered content
// @author       Azmoria
// @downloadURL  https://github.com/Azmoria/dndbeyonddark/raw/master/
// @updateURL    https://github.com/Azmoria/dndbeyonddark/raw/master/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @match        https://www.dndbeyond.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
     $(`a[href*='/spells'], a[href*='/monsters'], a[href*='/feats'], a[href*='/magic-items']`).each(function(){
         $(this).attr('href', `${$(this).attr('href')}?filter-partnered-content=t`)
     });
})();