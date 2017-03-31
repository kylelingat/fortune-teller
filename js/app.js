console.log('connected');


function generateFortuneCookie () {
	var fortunesList = ['die', 'skip school', 'kick that ice under the fridge', 'late to class, might as well not even go school','spend all ur money', 'always overreact', 'make a scene'];
	/* all possible fortunes */
	var random = fortunesList[Math.floor(Math.random() * fortunesList.length)];
	document.getElementById('text').textContent = random;
	/* randomizer set to random variable, change textContent of fortune-cookie-text to the random variable value */
	console.log(random)
	var list = document.getElementById('prevFortune');
	var node = document.createElement("div");
	node.innerHTML = random
	list.appendChild(node);		
}
