console.log(`========== Using while loop ==========`);
console.log("1) Numbers from 5 to 15 are: ");
i = 5;
while (i <= 15) {
  console.log(i);
  i++;
}

console.log("2) Numbers from 50 to 40 are: ");
i = 50;
while (i >= 40) {
  console.log(i);
  i--;
}

console.log("3) First 15 Odd numbers are: ");

let j = 0; // initialization
while (j <= 30) {
  // condition
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++; // update expression
}

console.log("4) First 10 Even numbers are: ");
let k = 0; // initialization
while (k < 20) {
  // condition
  if (k % 2 == 0) {
    console.log(k);
  }
  k++; // update expression
}

console.log("5) Table of 5 is: ");
let l = 5; // initialization
while (l <= 50) {
  // condition
  if (l % 5 == 0) {
    console.log(l);
  }
  l++; // update expression
}


// let l = 5;
// while(l<=50){
//     console.log(l);
//     l = l +5;
// }
 
console.log('6) Table of 10 is: ')
let m=10;  // initialization
while (m<=100) {  // condition
   if (m%10==0) {
      console.log(m);
      
   }
   m++; // update expression
}



console.log("7) Table of 10 in reverse order is: ");
let n = 100; // initialization
while (n >= 10) {
  // condition
  if (n % 10 == 0) {
    console.log(n);
  }
  n--; // update expression
}

//Result in One line
// console.log(`Result in One line:`);
// let p =5;
// let result = "";

// while(p<=50){
//     result = result +p +" ";
//    p = p +5;
//     }
// console.log(result);

// console.log(`Result in One line using if condition:`);
// let q =5;
// let result = "";
// while(q<=50){
//      if(q%5==0){
//         result = result + q + " ";
//        }
//           q++;
//      }
// console.log(result);
