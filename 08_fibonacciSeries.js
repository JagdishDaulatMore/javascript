function fibonacci(n) {
  let series = [0, 1]; // Start with the first two numbers in the series

  if (n <= 1) {
    return series.slice(0, n + 1); // Return the series up to n if n <= 1
  }

  for (let i = 2; i <= n; i++) {
    let nextNum = series[i - 1] + series[i - 2];
    series.push(nextNum);
  }

  return series;
}

let fibSeries = fibonacci(10);
console.log(
  `========================== Fibonacci Series ==================================`
);
console.log(`Fibonacci series is: [${fibSeries}]`);

// function printFibonacci(n) {
//     let a = 0, b = 1, c;
//     console.log(a);
//     console.log(b);
//     for (let i = 2; i < n; i++) {
//       c = a + b;
//       console.log(c);
//       a = b;
//       b = c;
//     }
//   }

//   printFibonacci(10); // prints the first 10 numbers in the Fibonacci series



// console.log('Fibonacci Series:');
// let n1 = 0, n2 = 1, nextTerm;
// function fibonacciNum(number){

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// }
// fibonacciNum(10);
