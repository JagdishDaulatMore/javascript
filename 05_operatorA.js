
console.log(`1. write a normal function in such a way that it should accept one string value as argument.`);
function squareOfWordLength(str){
    var wordLength = str.length;
    var stringLengthSquare = wordLength*wordLength;
    console.log(`Length of words in string is:${wordLength}`);
    console.log(`Square of words in string is:${stringLengthSquare}`);


}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`................................................................................................`);

console.log(`2. Given a string "I am Angular Developer" write a function with no arg and no return value. `);
function stringValues(){
    var strOne = "I am Angular Developer";

var StringLength = strOne.length;
console.log(`String length is:${StringLength}`);

    var stringWords = strOne.split(" ");
    var stringWordsLength = stringWords.length;
    console.log(`String words length is: ${stringWordsLength}`);

    var stringCharDivideByWord = StringLength/stringWordsLength;
    console.log(`2.1 Total character divide by total word in string is: ${stringCharDivideByWord}`);

    var stringCharMultiplyByWord = StringLength*stringWordsLength;
    console.log(`2.2 Total character multiply by total word in string is: ${stringCharMultiplyByWord}`);

    }


stringValues();