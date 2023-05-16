console.log(`1. ......................Greatest Number..........................`);

greaterNumber = function(arg1, arg2){
    
    result = arg1 > arg2 ? `${arg1} is greater`: `${arg2} is greater`;

    console.log(`${result}`);
}
console.log(`Given Numbers are: 10, -10`);
greaterNumber(10, -10);
console.log(`Given Numbers are: 800, -899`);
greaterNumber(800, 899);

console.log(`2. ..................EVEN and ODD Number...........................`);

var isEvenOrOddNum = function(num){
   var result = num%2 == 0 ? true : false;
    return result;
}

var result = isEvenOrOddNum(29);
var res = (result == true) ? `29 is even number` : `29 is odd number`;
console.log(`${res}`);

var result = isEvenOrOddNum(44);
var res = (result == true) ? `44 is even number` : `44 is odd number`;
console.log(`${res}`);

var result = isEvenOrOddNum(0);
var res = (result == true) ? `0 is even number` : `0 is odd number`;
console.log(`${res}`);

var result = isEvenOrOddNum(101);
var res = (result == true) ? `101 is even number` : `101 is odd number`;
console.log(`${res}`);

console.log(`3. .................EVEN and ODD Word Length.........................`);

var wordLength = function(word){
var len = word.length;
var result = len%2 == 0 ? `EVEN`: `ODD`;
return result;
}
console.log(`Given word is: "JavaScript"`);
returnValue = wordLength("JavaScript")
console.log(`JavaScript is: ${returnValue}`);

console.log(`Given word is: "developer"`);
returnValue = wordLength("developer")
console.log(`developer is: ${returnValue}`);

console.log(`Given word is: "Google"`);
returnValue = wordLength("Google")
console.log(`Google is: ${returnValue}`);