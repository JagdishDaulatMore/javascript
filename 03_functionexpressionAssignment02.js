
console.log(`1. Function expression to get square of the number Ex - 5,6,25,100 `);

var square = function(num){
var result = num*num;
return   `${result}`;

}

var result = square(5);
console.log(`square of 5 is:`, result);

var result = square(6);
console.log(`square of 6 is:`, result);

var result = square(25);
console.log(`square of 25 is:`, result);

var result = square(100);
console.log(`square of 100 is:`, result);

console.log("");
console.log(`2. Check and log type of function (Hint - typeof variableName) `);

var variableName = function(){
    var typeOfVariableName = typeof variableName;
    return typeOfVariableName;

}
var typeOfVariableName = variableName();
console.log(`Type of function is: ${typeOfVariableName}`);


console.log("");
console.log(`3. Write a FE to get area of rectangle plot[length = 499, width = 917]`);

var areaOfRectangle = function(length, width){
    var result = length*width;
    return `Area of Rectangle plot is: ${result}`;
}

var result = areaOfRectangle(499, 917)
console.log(result);

console.log("");
console.log(`4. FE with two args and should swap the passed values and log on console before swap and after swap values inside function  itself `);



var strOne = "Virat";
var strTwo = "Anushka";
var numOne = 1000;
var numTwo = 2000;

var swapValues = function(arg1, arg2){
    console.log(`Before swap:${arg1} ${arg2}`)

    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    var result = (`${arg1} ${arg2}`);
     return result;
}

var result = swapValues(strOne, strTwo);
console.log(`After swap: ${result}`);

var result = swapValues(numOne, numTwo);
console.log(`After swap: ${result}`);


console.log("");
console.log(`5. Write a FE which can perform the below steps for string "Js the most popular language of internet" `);


var str = "Js the most popular language of internet";
var strOne  = function(){
var strLength = str.length;
return strLength;}
 var strLength = strOne();
 console.log(`A. Total number of character in given string is: ${strLength}`);


 var strTwo  = function(){
    var charAtIndexSix= str.charAt(6);
   return charAtIndexSix;}

   var charAtIndexSix = strTwo();
console.log(`B. Char at index 6 is: ${charAtIndexSix}`);


 var strThree  = function(){
var charAtIndexEleven = str.charAt(11);
return charAtIndexEleven;}

var charAtIndexEleven = strThree();
console.log(`C. Char at index 11 is: ${charAtIndexEleven}`);


var strFour  = function(){

var charAtLastIndex = str.charAt(strLength-1);
return charAtLastIndex;}
    
var charAtLastIndex = strFour();
console.log(`D. Last character of String is: ${charAtLastIndex}`);


var strFive  = function(){
        
var charAtIndexZero= str.charAt(0);
return charAtIndexZero;}

var charAtIndexZero = strFive();
console.log(`E. Char at index 0 is: ${charAtIndexZero}`);

 
var strFive  = function(){
    
    var resultSplit = str.split(" ");
    console.log(resultSplit);
    var resultSplitLength = resultSplit.length;
    return resultSplitLength;
}

var resultSplitLength = strFive();
console.log(`F a)Total number of words in given string is: ${resultSplitLength}`);

var strSix  = function(){
    var resultSqure = resultSplitLength * resultSplitLength;
    return resultSqure;
}
var resultSqure = strSix();
console.log(`F b) Square of the total number of words in given string is: ${resultSqure}`);
