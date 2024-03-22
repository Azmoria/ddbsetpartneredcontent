// ==UserScript==
// @name         Set DDB partner content filter default on
// @namespace    github.com/azmoria
// @version      0.2
// @description  Set default partnered content
// @author       Azmoria
// @downloadURL  https://github.com/Azmoria/ddbsetpartneredcontent/raw/main/Set%20DDB%20partner%20content%20filter%20default%20on.user.js
// @updateURL    https://github.com/Azmoria/ddbsetpartneredcontent/raw/main/Set%20DDB%20partner%20content%20filter%20default%20on.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @match        https://www.dndbeyond.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
     $(`.mm-mega-menu a[href*='/spells'], .mm-mega-menu a[href*='/monsters'], .mm-mega-menu a[href*='/feats'], .mm-mega-menu a[href*='/magic-items']`).each(function(){
         $(this).attr('href', `${$(this).attr('href')}?filter-partnered-content=t`)
     });
})();
