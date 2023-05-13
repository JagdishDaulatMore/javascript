var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of character in given string is: ", greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index: ",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index: ",charAtLastIndex);

var charAtIndexTwenty= greet.charAt(20);
console.log("Char at index 20 is:", charAtIndexTwenty);

var firstName = "Gajanan";
var lastName = " Kharat";

var concatString = firstName.concat(lastName);
console.log("Concat String is: ", concatString);

var indexOfM = greet.indexOf("M")
console.log("Index of M is: ", indexOfM);

var indexOfo = greet.lastIndexOf("o");
console.log("Index of o is: ", indexOfo);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace: ", replaceValue);


var firstName = "     Gajanan      ";
var firstNameLength = firstName.length;
console.log("Before trim length is: ", firstNameLength );

var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After Trim firstName is: ",trimmedFirstName, trimmedFirstName.length );
console.log("Trimmed total spaces : ", firstNameLength-lengthAfterTrim);

var lastName = "        Kharat   ";
lastName.trimEnd();

var firstName = "Gajanan";
var result = firstName.length;
console.log("Total char available in firstName is:",result );

var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);









