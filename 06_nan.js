var num1;//
num1 = num1++; // undefined + 1 ==> NaN
console.log(`${num1}, type of NaN is ${typeof num1}`);

console.log(`${0/0}`);

var numTwo = "200";
numTwo = numTwo++; // 200 + 1
console.log(`${numTwo}`);

var num3 = "Ten";// "10" ==> 10
num3 = --num3; 
console.log(`${num3}`);

var city = "Pune";
var result = +city;
console.log(`${result}`);

var num5 = "100";
var result = +num5;
console.log(`Result is ${result} and it's type is: ${typeof result}`);



