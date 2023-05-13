
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

console.log(`2. Check and log type of function (Hint - typeof variableName) `);

var variableName = function(){}
var typeOfVariableName = typeof variableName;
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
console.log("");

var strOne = "Virat";
var strTwo = "Anushka";
var numOne = 1000;
var numTwo = 2000;

var swapValues = function(arg1, arg2){
    console.log(`Before swap:`, arg1, arg2)

    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(`After swap: ${arg1}, ${arg2}`)
}
swapValues(strOne, strTwo);
swapValues(numOne, numTwo);

console.log("");
console.log(`5. Write a FE which can perform the below steps for string "Js the most popular language of internet" `);

// var stsplitlength = 7;
var str = "Js the most popular language of internet";
var strOne  = function(){
    
    
   var strLength = str.length;
    console.log(`A. Total number of character in given string is: ${strLength}`);

   var charAtIndexSix= str.charAt(6);
console.log(`B. Char at index 6 is: ${charAtIndexSix}`);


   var charAtIndexEleven= str.charAt(11);
console.log(`C. Char at index 11 is: ${charAtIndexEleven}`);


var charAtLastIndex = str.charAt(strLength-1);
console.log(`D. Last character of String is: ${charAtLastIndex}`);

var charAtIndexSix= str.charAt(0);
console.log(`E. Char at index 6 is: ${charAtIndexSix}`);

var resultSplit = str.split(" ");
console.log(resultSplit);
var resultSplitLength = resultSplit.length;
console.log(`F a)Total number of words in given string is: ${resultSplitLength}`);

var result = resultSplitLength * resultSplitLength;
console.log(`F b) Square of the total number of words in given string is: ${result}`);

}
 strOne();

//  var stsplitlength = 7;
// var st = "JS the most popular language of internet";
// var method = function(num){
//     var stLength = st.length;
//     var stchatAtSixIndex = st.charAt(6);
//     var stchatAtElevenIndex = st.charAt(11);
//     var stLastChar = st.charAt(stLength-1);
//     var stFirstChar = st.charAt("0");
    
//     console.log(`A. Total Character Avaliable in the String: ${stLength}`);
//     console.log(`B. Character at index 6: ${stchatAtSixIndex}`);
//     console.log(`C. Character at index 11: ${stchatAtElevenIndex}`);
//     console.log(`D. Last Character using Length Property: ${stLastChar}`);
//     console.log(`E. First Character From The given String : ${stFirstChar}`);
//     var stSplit = st.split(" ");


  
//     console.log(`F a). Total number of Words in the given string : ${stSplit.length}`);
//     var result = num*num;
    
//     console.log( `F b). Square of Total number of words in given string : ${result}`);


// }
//   method(stsplitlength);