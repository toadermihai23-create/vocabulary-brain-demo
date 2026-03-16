function updateReview(word,correct){

if(!word.box) word.box=1;

if(correct){

word.box++;

}else{

word.box=1;

}

word.nextReview=Date.now()+word.box*86400000;

}
