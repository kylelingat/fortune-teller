function generateFortuneCookie () {
  var node = document.createElement('li');
  /* create li node */

  var text = document.getElementById('fortune-cookie-text');
  /* create text node */
  node.appendChild(text);
  /* appended 'fortune-cookie-text' to li */

  document.getElementById('previous-fortunes').appendChild(node);
  /* appends node to 'previous-fortunes' */

  var fortunesList = ['luck','die','nothing','test'];
  var random = fortunesList[Math.floor(Math.random() * fortunesList.length)];
  document.getElementById('fortune-cookie-text').innerText = random; 
}
