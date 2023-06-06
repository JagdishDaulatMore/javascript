console.log(
  `======= Remove duplicate elements from array without spread operator and set method ========`
);

const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(`Given array is: ${arrayNum}`);

function getUnique(arrayNum) {
  let uniqueArr = [];

  // loop through array
  for (let i of arrayNum) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

getUnique(arrayNum);
