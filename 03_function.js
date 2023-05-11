function show() {
    console.log("Show function");
}
console.log("Before function call");
show(); // Function call or invoke
console.log("After function");
show();
show();
show();

var numOne = 100;
var numTwo = 200;

var name1 = "Billgates";
var name2 = "Elon Musk";

var fruitApple = "Apple";
var fruitMango = "Mango";

function swapVariables(valueOne, valueTwo){ // Arguments: valueOne =100  valueTwo = 200 var valueThree;
    console.log("Before Swap: ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log("After Swap: ", valueOne, valueTwo);
}
swapVariables(numOne, numTwo); // 100 200
swapVariables(name1, name2);
swapVariables(fruitApple, fruitMango);