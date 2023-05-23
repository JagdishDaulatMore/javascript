console.log("=================Count Characters in String=======================");

function countCharA(word){
  let count = 0;
for(index = 0; index<word.length; index++){
let char = word.charAt(index);   
if(char=="a" || char=="A" ){

count++;
}

}
return count;
}
// console.log(`Count total vowels: ${count}`);

console.log(`Given string is: "I AM Learning JavaScript, The Language of internet"`);
let countTotalCharOne = countCharA(`"I AM Learning JavaScript, The Language of internet"`);
console.log(`Total character ['a' or 'A'] in string is: ${countTotalCharOne}`);

console.log(`Given string is: "My favourite movie is LAggAn"`);
let countTotalCharTwo = countCharA(`"My favourite movie is LAggAn"`);
console.log(`Total character ['a' or 'A'] in string is: ${countTotalCharTwo}`);
