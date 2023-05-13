
function stringHandsOn (){
console.log(`1. Given string is as it is:  Hey you are doing good, keep it up   `);

var strOne = "  Hey you are doing good, keep it up   ";
var charLength = strOne.length;
console.log("2. Length of string is:", charLength);

var trimmedStrOne = strOne.trim();
var lengthAfterString = trimmedStrOne.length;
console.log(`3. After removing extra spaces the string length is:`, lengthAfterString);

var extraSpaces = charLength - lengthAfterString;
console.log(`4. Total number of extra spaces in string are:`, extraSpaces);

var charAtZeroIndex = trimmedStrOne.charAt(0);
var charAtLastIndex = trimmedStrOne.charAt(trimmedStrOne.length-1);
console.log(`5. First and Last character of String after trim are:`, charAtZeroIndex, charAtLastIndex);


var strOne = "  Hey you are doing good, keep it up   ";
var trimmedStrOne = strOne.trim();
var resultSplit = trimmedStrOne.split(" ");
console.log(`6. Count of total words available in the string:`, resultSplit.length);

var searchResult = trimmedStrOne.search("good");
console.log(`7. Index of word "good" in given string:`, searchResult);

var subStringResult = trimmedStrOne.substring(22);
console.log(`8. a) Substring starting from index 22 by using substring method :`, subStringResult);

var sliceResult = trimmedStrOne.slice(22);
console.log(`8. b) Substring starting from index 22 by using slice method :`, sliceResult);

var resultEndsWith = trimmedStrOne.endsWith("up");
console.log(`9. String ends with word "up":`, resultEndsWith);

var resultStartsWith = trimmedStrOne.startsWith("Hey");
console.log(`10. String starts with word "Hey":`, resultStartsWith);
}

stringHandsOn();