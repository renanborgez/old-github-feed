// ==UserScript==
// @name         Old github dashboard
// @namespace    renanborgez
// @author       renanborgez
// @version      2.0
// @match        https://github.com/
// @match        https://github.com/dashboard-feed
// ==/UserScript==

(function() {
  'use strict';
  
  document.getElementById('dashboard').innerHTML = 'Loading old dashboard...';
  
  fetch('https://github.com/dashboard-feed').then(response => response.text()).then(data => {
  	const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const content = doc.getElementsByTagName('main')[0].innerHTML;
    document.getElementById('dashboard').innerHTML = content;
  }).catch(() => {
    document.getElementById('dashboard').innerHTML = 'Something wrong happended!'
  });
})();

