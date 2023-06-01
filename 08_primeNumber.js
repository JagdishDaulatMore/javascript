function primeNum(num) {
    let isPrime = true;
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        isPrime = false;
        console.log(`Not a prime number as it is divisible by ${index}`);
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is prime number`);
    } else {
      console.log(`Is not prime number ${num}`);
    }
  }
  
  primeNum(4);
  primeNum(5);
  primeNum(9);
  primeNum(11);
  primeNum(1);
  
  
  
  