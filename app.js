let vocabulary = [];

fetch("data/vocabulary.json")
.then(res => res.json())
.then(data => {

 vocabulary = data;

 buildAlphabet();
 displayWords(vocabulary);

});

function buildAlphabet(){

 let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

 let html="";

 alphabet.forEach(letter=>{
 html+=`<span onclick="filterLetter('${letter}')">${letter}</span>`;
 });

 document.getElementById("alphabet").innerHTML=html;

}

function filterLetter(letter){

 let filtered=vocabulary.filter(v =>
 v.english.toUpperCase().startsWith(letter)
 );

 displayWords(filtered);

}

function displayWords(list){

 let container=document.getElementById("vocabularyContainer");

 container.innerHTML="";

 list.sort((a,b)=>a.english.localeCompare(b.english));

 list.forEach(word=>{

 let card=document.createElement("div");

 card.className=`card ${word.type}`;

 card.innerHTML=`

 <div class="cardHeader">

 <h3>${word.english}</h3>

 </div>

 <div class="languageRow">

 <div class="lang">
 <img src="icons/english.png">
 ${word.english}
 </div>

 <div class="lang">
 <img src="icons/spain.png">
 ${word.spanish}
 </div>

 <div class="lang">
 <img src="icons/italy.png">
 ${word.italian}
 </div>

 <div class="lang">
 <img src="icons/france.png">
 ${word.french}
 </div>

 <div class="lang">
 <img src="icons/arabic.png">
 ${word.arabic}
 <div class="pron">${word.arabic_pron}</div>
 </div>

 <div class="lang">
 <img src="icons/germany.png">
 ${word.german}
 <div class="pron">${word.german_pron}</div>
 </div>

 <div class="lang">
 <img src="icons/russia.png">
 ${word.russian}
 <div class="pron">${word.russian_pron}</div>
 </div>

 </div>
 `;

 container.appendChild(card);

 });

}
