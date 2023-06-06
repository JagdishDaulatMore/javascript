console.log(`Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`Display function...`);
}
display();


console.log(`Arrow function with arguments and no return value`);
let show = (id, name) => {
    console.log(`ID: ${id} Name: ${name}`);
    console.log(`Inside show function ...`);
}
show(22, "Bill");

console.log(`Arrow function with arguments and return value`);
let add = (num1, num2) => {
    let result = num1 + num2;
    return result;
}
let result = add(100, 200);
console.log(`Result is ${result}`);



