function generateStats(){

let total=vocabulary.length;

let words=vocabulary.filter(v=>v.type=="word").length;
let phrases=vocabulary.filter(v=>v.type=="keyphrase").length;
let expressions=vocabulary.filter(v=>v.type=="expression").length;

document.getElementById("stats").innerHTML=`

Total Words: ${total}

Words: ${words}
Phrases: ${phrases}
Expressions: ${expressions}

`;

}
