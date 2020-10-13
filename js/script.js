window.onload = function(){
	console.log(':~)');

	document.getElementById('wrapper').style.opacity="1";
}

var acts = ['Create a collection of 8 empowering words.','Choose 4 colors to represent the nature of activism and name them.','What are typefaces that capture the essence of dreams and reality?','Create 6 pairs of objects, words, and phrases that are counter-intuitive. (through images like diptych pairs or with type)', 'Drink some water!', 'Do a downward dog.','Gather 10 design artifacts that you have found compelling lately.','Who are you creating for?','Why is the work you’re doing important to you?','Is the work you’re making accessible?','How are you pushing your aesthetic choices?','Can you defend the design decisions you’ve made?']

function newAct(){

    var randomNumber = Math.floor(Math.random()*(acts.length));

    document.getElementById('activity').innerHTML = acts[randomNumber];

}
