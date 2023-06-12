const array = [10, 5, 'a', 'b', 'h', 11];
console.log(`Given Array is: [10, 5, 'a', 'b', 'h', 11] `);

const numbers = array.filter((element) =>{
    return typeof element === 'number';
});
numbers.sort((n1, n2)=>{
return n1>n2 ? 1 : -1;
});
console.log(`Sorted array of numbers is: \n`, [...numbers]);

const characters = array.filter((element) =>{
    return typeof element === 'string';
});
// characters.sort((n1, n2)=>{
// return n1>n2 ? 1 : -1;
// });
characters.sort();
console.log(`Sorted array of characters is:\n`, [...characters]);
console.log(`Sorted array is: \n`, [...numbers, ...characters]);



