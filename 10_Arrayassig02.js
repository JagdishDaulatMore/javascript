const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`===================== Array Numbers =================`);

let arrayLength = arrayNumbers.length;
console.log(`Given array is: [${arrayNumbers}]`);
console.log(`1) Total elements available in array is: ${arrayLength}`);

let firstElement = arrayNumbers[0];
console.log(`2) First element in array is: ${firstElement}`);

let lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`2) Last element in array is: ${lastElement}`);

let thirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`3) Third last element in array is: ${thirdLastElement}`);


console.log(`4) =================== Even Numbers ======================`);

for(const index in arrayNumbers)

 if((arrayNumbers[index])%2==0){
    console.log(`Even number is: ${arrayNumbers[index]}`);

   }
   

   console.log(`5) =================== Odd Numbers ======================`);
for(const index in arrayNumbers)
if((arrayNumbers[index])%2!==0){
    console.log(`Odd number is: ${arrayNumbers[index]}`);
}

console.log(`6) =================== Even position Numbers ======================`);

sumOfEvenNum = 0;
for(const index in arrayNumbers)
if(index%2==0){
    console.log(`Even positioned number is: ${arrayNumbers[index]}`);
    sumOfEvenNum = sumOfEvenNum+ arrayNumbers[index];
}
console.log(`Sum of even position elements in array is: ${sumOfEvenNum}`); 

console.log(`7) =================== Odd position Numbers ======================`);

sumOfOddNum = 0;
for(const index in arrayNumbers)
if(index%2!==0){
    console.log(`Odd positioned number is: ${arrayNumbers[index]}`);
    sumOfOddNum = sumOfOddNum+ arrayNumbers[index];
}
console.log(`Sum of odd position elements in array is: ${sumOfOddNum}`); 
  
    let result = 0;
for (const index in arrayNumbers) {  
result = result+ arrayNumbers[index];
    }
console.log(`8) Sum of all elements in array is: ${result}`); 

console.log(`9) =================== Multiple of 5 Numbers ======================`);
for(const index in arrayNumbers)
if((arrayNumbers[index])%5==0){
    console.log(`Multiple of 5 is: ${arrayNumbers[index]}`);
}


let isAvailable = arrayNumbers.includes(115);
console.log(`10) Is number 115 is available: ${isAvailable}`);

let isAvailableNum = arrayNumbers.includes(23);
console.log(`11) Is number 23 is available: ${isAvailableNum}`);

let AddElements = arrayNumbers.splice(3, 0, 55, 66);
console.log(`12) Insert elements 55 and 66 before index 3 is: [${arrayNumbers}] `);

let deletElements = arrayNumbers.splice(4,3);
console.log(`13) Delete 3 elements starting from index 4,the array is: [${arrayNumbers}]`);
