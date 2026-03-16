function openAddModal(){
document.getElementById("addModal").style.display="block";
}

function saveWord(){

let word={
english:english.value,
spanish:spanish.value,
italian:italian.value,
french:french.value,
arabic:arabic.value,
arabic_pron:arabic_pron.value,
german:german.value,
german_pron:german_pron.value,
russian:russian.value,
russian_pron:russian_pron.value,
type:type.value
};

vocabulary.push(word);

localStorage.setItem("vocabulary",JSON.stringify(vocabulary));

displayWords(vocabulary);
}
