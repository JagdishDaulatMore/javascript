

const arrayNames = ["shyam", "Anil", "Shubhu", "Jenny", "Bittu", "Kittu"]
arrayNames.sort(); // Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse(); // Sorting in reverse order
console.log(arrayNames);

// const array = [23, 9, 204, 4, 0, 66, 106 ];
// array.sort()
// console.log(array);

console.log(`------Sorting in Ascending order-----`);
const array = [23, 9, 204, 4, 0, 66, 106 ]; 
array.sort((n1, n2) => {
    return n1>n2 ? 1 : -1 ;
});

console.log(array);

// console.log(`------Sorting in Descending order-----`);
// array.reverse();
// console.log(array);

console.log(`------Sorting in Descending order-----`);
const array2 = [23, 9, 204, 4, 0, 66, 106 ]; 
array2.sort((n1, n2) =>{
return n1>n2 ? -1 : 1;
});
console.log(array2);

