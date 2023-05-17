console.log(`${ '3' + 2 }`);
console.log(`${ '3' + undefined }`);

console.log(`${ '6' - true}`);

console.log(`${ 7 - false}`);

console.log(`${ false - undefined}`);

console.log("======== explicit conversion ===========");


console.log(`===== Boolean to Number Explicit conversion========`);
var num1 = true; // boolean to number ==> Number
var result = Number(num1);
console.log(`Boolean to number ${result} and it's type ${typeof result}`);

console.log(`===== String to Number Explicit conversion========`);
var num2 = "30"; // string to number ==> Number
var result = Number(num2);
console.log(`String to number ${result} and it's type ${typeof result}`);

console.log(`===== Any type to Boolean Explicit conversion========`);
var num3 = 1; // conversion number to boolean
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

var num3 = 0; // conversion number to boolean
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

var num4 = "Bill gates"; // conversion String to boolean
var result =  Boolean(num4);
console.log(`string to boolean ${result} and it's type ${typeof result}`);


console.log(`===== Any type to String Explicit conversion========`);
var num5 = 100; 
var result =  String(num5);
console.log(`number to string ${result} and it's type ${typeof result}`);

var num6 = true; 
var result =  String(num6);
console.log(`number to string ${result} and it's type ${typeof result}`);

