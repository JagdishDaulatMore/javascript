for (let index = 0; index <= 10; index++) {
  // index = 11

  console.log(index); // 0 1  2 ... 10
}
console.log("-----------------------------------------");

// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
var result = "";
for (let index = 5; index <= 50; index = index + 5) {
  // index = 11
  result = result + " " + index;
  // 0 1  2 ... 10
}
console.log(result);

console.log("-----------------------------------------");
var result = "";
for (let index = 10; index <= 100; index = index + 10) {
  result = result + " " + index;
}
console.log(result);

console.log("-----------------------------------------");

var result = "";
for (let i = 19; i <= 190; i = i + 19) {
  result = result + " " + i;
}
console.log(result);
console.log("-----------------------------------------");

var result = "";
for (let i = 8; i <= 80; i = i + 8) {
  result = result + " " + i;
}
console.log(result);

console.log("-----------------------------------------");

var result = "";
for (let index = 80; index >= 8; index = index - 8) {
  result = result + " " + index;
}
console.log(result);

console.log("-----------------------------------------");

// JavaScript = J a v a S c r  i  p  t
var str = "JavaScript"; // 9
var result = "";
for (let index = 0; index < str.length; index++) {
  // 0  1   2
  var char = str.charAt(index); // J  a v
  result = result + " " + char;
}
console.log(result);

console.log("-----------------------------------------");
// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--

var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) {
  // index = 9  8
  var char = str.charAt(index);
  reverseString = reverseString.concat(char);
}
console.log(reverseString);

console.log("-----------------------------------------");

function reverseWord(word) {
  var reverseString = "";
  var wordLength = word.length - 1;
  for (let index = wordLength; index >= 0; index--) {
    // index = 9  8
    var char = word.charAt(index);
    reverseString = reverseString.concat(char);
  }
  console.log(reverseString);
}
reverseWord("JavaScript");
reverseWord("Google Chrome");
reverseWord("Developer");

console.log("-----------------------------------------");

var word = "JavaScript Language Of Internet";
// a e i o u == A E I O U
var count = 0;

for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index); //
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(char);
    count++;
  }
}
console.log(`Count total vowels: ${count}`);

console.log("-----------------------------------------");

var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) {
  // index = 9  8
  var char = str.charAt(index);
  reverseString = reverseString.concat(char);
}
console.log(reverseString);

console.log("-----------------------------------------");

// a e i o u == A E I O U
var count = 0;
var word = "JavaScript Language Of Internet";
var result = "";
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index); //
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    // console.log(char);
    result = result + char;
    count++;
  }
}
console.log(`Vowels in string are: ${result}`);
console.log(`Count total vowels are: ${count}`);
