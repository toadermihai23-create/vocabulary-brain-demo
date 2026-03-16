function parseSRT(text){

let words=text
.replace(/\d+/g,"")
.replace(/\n/g," ")
.split(" ");

let clean=[...new Set(words)];

return clean;

}
