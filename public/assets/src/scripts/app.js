console.log('99 little bugs in the code');
console.log('99 bugs in the code');
console.log('patch one down, compile it around');
console.log('117 bugs in the code');

(()=>{

  'use strict';

  const container = document.getElementById('CssAssessment');
  const links = document.querySelectorAll('link[rel=import]');
  for (let link of links) {
    let content = document.importNode(link.import.body.firstChild, true);
    container.appendChild(content);
  }

})();
