window.onload = function(){
	console.log(':~)');

	document.getElementById('wrapper').style.opacity="1";
}

var acts = ['What was the first notable year of your life?','Do you ever feel precious? Do you want to?','How do you care for yourself?','Are you a morning person or a night person? Why?', 'Drink some water!', 'Do a downward dog.','What do you carry with you everywhere?','What was the most interesting close-call that you’ve ever seen not-happen?','Who is someone “famous” who deserves more flowers?','If you could have any pet in the world what would it be?','If a robber came in right now and said they wouldn’t kill you if you sing one song, word for word, what song would it be? Now sing it…','What’s something that you think shouldn’t be illegal?','Where do you feel resistance in your life?','Have you held onto any mementos from your childhood? If yes, what does it mean to you?','What is your relationship to the word radical? Revolutionary?','What is something you have learned outside of the educational system? What did that learning look like?']

function newAct(){

    var randomNumber = Math.floor(Math.random()*(acts.length));

    document.getElementById('activity').innerHTML = acts[randomNumber];

}
