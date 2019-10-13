// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let results = [];
  let body = document.body;
  var recursiveFind = function(div){
    if(div.classList && div.classList.contains(className)) {
      results.push(div);
    }
    if (div.childNodes) {
      for (var i = 0; i < div.childNodes.length; i++) {
        recursiveFind(div.childNodes[i]);
      }
    }
  };
  recursiveFind(body);
  return results;
};
