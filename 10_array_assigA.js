
console.log("=========================== Fruits Array ================================");
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given array is: ["Banana", "Orange", "Apple", "Mango", "Water Melon"]`);

let zeroIndexValue = arrayFruits[0];
console.log(`1) First Element is: ${zeroIndexValue}`);

let arrayLength =arrayFruits.length;
let lastIndexValue = arrayFruits[arrayLength-1]
console.log(`   Last Element is: ${lastIndexValue}\n`);

let addElement = arrayFruits.unshift("Papaya");
console.log(`2) Add "Papaya" element, the array is: ${arrayFruits}\n`);

let removeElement = arrayFruits.splice(4, 1);
console.log(`3) Remove "Mango" element, the array is: ${arrayFruits}\n`);


let addElementTwo = arrayFruits.push("Pineapple");
console.log(`4) Add " Pineapple" element, the array is: ${arrayFruits}\n`);

let arrseconLastElement = arrayFruits.length-3;
let addElementDragfruit = arrayFruits.splice(4, 0, "Dragan Fruit")
console.log(`5) Add " Dragun Fruit" element, the array is: ${arrayFruits}\n`);

let replaceKiwi = arrayFruits.splice(2, 1, "Kiwi");
console.log(`6) Replace " Kiwi" element, the array is: ${arrayFruits}\n`);

let sliceElements = arrayFruits.slice(1, 4);
console.log(`7) Slice element from 1 to 4 index, the array is: ${sliceElements}\n`);

let lastThirdElement = arrayFruits.length-3;
let lastThreeElements = arrayFruits.slice(lastThirdElement);
console.log(`8) Select last 3 element, the array is: ${lastThreeElements}`);




