// ==UserScript==
// @name     		fxhash front parser
// @description Hide cards from artists listed in "toHide" array. User needs to have the "Display Infos" enabled in their fxhash front settings
// @version  		1
// @grant    		none
// @include     https://www.fxhash.xyz/*
// ==/UserScript==

// Case sensitive list of artists names
const toHide = [
  "Example 1",
  "Example 2",

];

const observer = new MutationObserver((mutations, observer) => {
  
  const container = document.getElementsByClassName("Card_container__dn3j_ undefined");
  if( container.length == 0 )
    return;
  
  for (const item of container) {
    for(const check of toHide) {
      if( item.textContent.includes(check)) {
        item.parentNode.style.display = "none";
      }
    }
	}
});

observer.observe(document, {
  subtree: true,
  childList : true,
});