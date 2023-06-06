const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array is: [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]\n`);

console.log(`1. Add 10 into each element the new array is: `);

const arrayTransformed = arrayNumbers.map((element) =>{
return element+10;
});
console.log(arrayTransformed);

console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2. Square the each array element is: `);
const squareArrayElement = arrayNumbers.map((element) => {
    return element*element;
});
console.log(squareArrayElement);


console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2. Add index value into it's corresponding each array element the new array is: `);
const indexValueArray = arrayNumbers.map((element, index) => {
return element+index;
});
console.log(indexValueArray);