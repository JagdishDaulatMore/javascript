let factorial = 1;
for (let index = 5; index >=1; index--) {
factorial = factorial * index;

    
}
console.log(`Factorial: ${factorial}`);


function factorialNum(num){
    if(num==0){
        console.log(`factorial of zero is 1`);
        return;
    }
  let  factorialOne = 1;
for (let index = num; index >=1; index--) {
    factorialOne = factorialOne * index;
}
console.log(`Factorial: ${factorialOne}`);
}
factorialNum(4);
factorialNum(5);
factorialNum(6);
factorialNum(0);