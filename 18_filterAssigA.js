const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(" 1. ======== All the numbers which are greater than 50 ========");
const arrayGreaterThan50 = arrayNumbers.filter((element) => {
return element>50;
});
console.log(arrayGreaterThan50);
console.log("------------------------------------------------------------------");

console.log(" 2. ======== All the even numbers ========");
const evenNumbers = arrayNumbers.filter((element) => {
    return element%2===0;
});
console.log(evenNumbers);
console.log("------------------------------------------------------------------");

console.log(" 3. ======== All the odd numbers ========");
const oddNumbers = arrayNumbers.filter((element) => {
    return element%2!==0;
});
console.log(oddNumbers);
console.log("------------------------------------------------------------------");

console.log(" 4. ======== All the numbers which are multiple of 5 ========");
const numbersMultipleOf5 = arrayNumbers.filter((element) => {
return element%5==0;
});
console.log(numbersMultipleOf5);
console.log("------------------------------------------------------------------");

console.log(" 5. ======== All the numbers which are between 20 and 50 ========");
const numberBetween20And50 = arrayNumbers.filter((element) => {
return (element>20 && element<50);
});
console.log(numberBetween20And50);