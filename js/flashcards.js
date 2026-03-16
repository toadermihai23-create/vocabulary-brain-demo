function startFlashcards(){

let word=vocabulary[Math.floor(Math.random()*vocabulary.length)];

document.getElementById("flashcard").innerHTML=`

<h2>${word.english}</h2>

<button onclick="showAnswer('${word.spanish}')">Spanish</button>

<button onclick="showAnswer('${word.italian}')">Italian</button>

<button onclick="showAnswer('${word.french}')">French</button>

`;

}

function showAnswer(answer){

alert(answer);

}
