console.log('connected');



function generateFortuneCookie () {
	var fortunesList = ['A beautiful, smart, and loving person will be coming into your life.','A dubious friend may be an enemy in camouflage.','A feather in the hand is better than a bird in the air.','The early bird gets the worm, but the second mouse gets the cheese.', 'Your road to glory will be rocky, but fulfilling.', 'Dont worry about money. The best things in life are free.', 'Dont pursue happiness, create it.', 'Courage is not the absence of fear; it is the conquest of it.', 'Nothing is so much to be feared as fear.'];
	/* all possible fortunes */

	var random = fortunesList[Math.floor(Math.random() * fortunesList.length)];
	document.getElementById('text').textContent = random;
	/* randomizer set to random variable, change textContent of fortune-cookie-text to the random variable value */
	console.log('User ' + random)

	var list = document.getElementById('someting');
	var node = document.createElement("div");
	node.innerHTML = random
	list.appendChild(node);
}


function generateKermit () {
	document.body.style.backgroundImage = "url('http://i0.kym-cdn.com/entries/icons/original/000/021/668/kermie.JPG')";
	var kermitList = ['die', 'skip school', 'kick that ice under the fridge', 'late to class, might as well not even go school','spend all ur money', 'always overreact', 'make a scene']
	var random = kermitList[Math.floor(Math.random() * kermitList.length)];
	document.getElementById('kermitbutton').style.backgroundColor = 'white';
	document.getElementById('text').style.color = 'green';
	document.getElementById('text').textContent = random;
	console.log('User ' + random)

	var list = document.getElementById('someting');
	var node = document.createElement("div");
	node.innerHTML = random
	node.style.color = 'green';
	list.appendChild(node);
}
