const array = [11, 22, 33, 44, 55 ];

// const clonedArray = array; // Shallow clone
// clonedArray.splice(2, 0, 100, 200);
// console.log(array);
// console.log(clonedArray);

const clonedArray = [...array];
clonedArray.splice(2, 0, 100, 200);
console.log(array);
console.log(clonedArray);



