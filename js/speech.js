function speak(text,lang){

let speech=new SpeechSynthesisUtterance(text);

speech.lang=lang;

speechSynthesis.speak(speech);

}
