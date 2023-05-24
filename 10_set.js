let setRollNums = new Set();
setRollNums.add(10);
setRollNums.add(20);
setRollNums.add(21);
setRollNums.add(45);
setRollNums.add(20);
console.log(setRollNums);

console.log(setRollNums.size);

setRollNums.delete(21);
console.log(setRollNums);

const isAvailable = setRollNums.has(20);
console.log(isAvailable);

setRollNums.add(55);
setRollNums.add(80);

console.log(typeof setRollNums);

for (const element of setRollNums) {
    console.log(element);
}
