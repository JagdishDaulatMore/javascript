
console.log("======== Calculation of Factorial Numbers =========");
function factorialOfNum(num){

    if(num==null || num==undefined || num=="NaN"){
        console.log(`Invalid Input: ${num} `);
        
       }else{
        if(num==0){
            console.log(`Factorial of zero is: 1`);
        }
       }

    let factorial = 1;
    for (let index = num; index >=1; index--) {
        
           factorial = factorial * index;
          }
    return factorial;
}
  let  factOfFive  = factorialOfNum(5);
 console.log(`Factorial of 5 is: ${factOfFive}`); 

 factOfThree  = factorialOfNum(3)
 console.log(`Factorial of 3 is: ${factOfThree}`); 

 factOfNull  = factorialOfNum(null)
//  console.log(`Factorial of null is: ${factOfNull}`); 

 factOfEight  = factorialOfNum(8)
 console.log(`Factorial of 8 is: ${factOfEight}`); 

 factOfUndefined = factorialOfNum(undefined)
//  console.log(`Factorial undefined is: ${factOfUndefined}`); 

 factOfNine  = factorialOfNum(9)
 console.log(`Factorial of 9 is: ${factOfNine}`);
 
 factOfZero  = factorialOfNum(0)
//  console.log(`Factorial 0 is: ${factOfZero}`); 


