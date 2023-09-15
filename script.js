// ==UserScript==
// @name         Old github dashboard Script 253583
// @namespace    renanborgez
// @author       renanborgez
// @version      1.0
// @match        https://github.com/
// @match        https://github.com/dashboard-feed
// ==/UserScript==

(function() {
  'use strict';
  
  fetch('https://github.com/dashboard-feed').then(response => response.text()).then(data => {
  	const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const olddashelement = doc.getElementsByTagName('main')[0]

    document.getElementById('dashboard').innerHTML = olddashelement.innerHTML;
  }).catch(console.log);
})();

