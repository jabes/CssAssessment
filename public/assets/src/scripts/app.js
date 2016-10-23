console.log('99 little bugs in the code');
console.log('99 bugs in the code');
console.log('patch one down, compile it around');
console.log('117 bugs in the code');

(()=> {

  'use strict';

  const importNode = (name) => {
    let container = document.getElementById('CssAssessment');
    let link = document.querySelector(`link[href="views/${name}.html"]`);
    let content = document.importNode(link.import.body.firstChild, true);
    container.appendChild(content);
  };

  importNode('hero');

})();
