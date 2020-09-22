var acts = ['What was the first notable year of your life?','Do you ever feel precious? Do you want to?','How do you care for yourself?','Are you a morning person or a night person? Why?', 'Drink some water!', 'Do a downward dog.','What do you carry with you everywhere?','What was the most interesting close-call that you’ve ever seen not-happen?','Who is someone “famous” who deserves more flowers?','If you could have any pet in the world what would it be?','If a robber came in right now and said they wouldn’t kill you if you sing one song, word for word, what song would it be? Now sing it…','What’s something that you think shouldn’t be illegal?']

function newAct(){

    var randomNumber = Math.floor(Math.random()*(acts.length));

    document.getElementById('activity').innerHTML = acts[randomNumber];

}
