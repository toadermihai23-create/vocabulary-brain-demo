async function generateSentence(word){

let response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[
{
role:"user",
content:`Create a short sentence using the word "${word}".`
}
]

})

});

let data=await response.json();

return data.choices[0].message.content;

}
