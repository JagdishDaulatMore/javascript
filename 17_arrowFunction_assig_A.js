console.log(`1. a) Arrow function with no arguments and no return value\n`);
let display = ()=> {
    console.log(`Good Morning, Today is Monday`);
}
display();
console.log(`-------------------------------------------------------------------------`);
console.log(`2.  Arrow function with arguments and no return value\n`);
let mul = (num1, num2, num3=1) =>{
let result = num1*num2*num3;
console.log(`Multiplication is: ${result}`);
}
console.log(`a) Passed values are: 5, 5, 2`);
mul(5, 5, 2);
console.log(`b) Passed values are: 10, 4`);
mul(10, 4);

console.log(`-------------------------------------------------------------------------`);
console.log(`3. Arrow function with arguments and return value\n`);
let addition = (num1, num2, num3, num4, num5) =>{
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
    
}
console.log(` Passed values are: 100, 100, 200, 349, 756`);
let result = addition(100, 100, 200, 349, 756);
console.log(`a) Addition is: ${result}`);
   
console.log(` Passed values are: "I am", "learning", "ES6", 'features', "in depth"`);
let resultString = addition("I am ", "learning ", "ES6 ", 'features ', "in depth");
console.log(`c) The string is: ${resultString}`);
