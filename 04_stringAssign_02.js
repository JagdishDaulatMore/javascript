
function stringHandsOn (){
console.log("1)Given string is at it is:  Hey you are doing good, keep it up   ");

var strOne = "  Hey you are doing good, keep it up   ";
var charLength = strOne.length;
console.log("2)Length of string is:", charLength);

var trimmedStrOne = strOne.trim();
var lengthAfterString = trimmedStrOne.length;
console.log("3)After removing extra spaces the string length is:", lengthAfterString);

var extraSpaces = charLength - lengthAfterString;
console.log("4)Total number of extra spaces in string are:", extraSpaces);

var charAtZeroIndex = trimmedStrOne.charAt(0);
var charAtLastIndex = trimmedStrOne.charAt(trimmedStrOne.length-1);
console.log("5)First and Last character of String after trim are:", charAtZeroIndex, charAtLastIndex);
}

stringHandsOn();