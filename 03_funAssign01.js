console.log("..........................  1  ...........................");

function cricketer() {
  console.log("cricketer function");
}
console.log("before function call");
// cricketer();
console.log("after function call");
cricketer();

console.log(" ");

function city() {
  console.log("city function");
}
console.log("before function call");
// city();
console.log("after function call");
city();
console.log("..........................  2  ...........................");

var firstName = "Jagdish";
var lastName = "More";
var collegeName = "D.Y. Patil";

function personalDetail(firstName, lastName, collegeName) {
  var firstName = "Jagdish";
  var lastName = "More";
  var collegeName = "D.Y. Patil";
  console.log(
    "firstName:",
    firstName,
    "\nlastName: ",
    lastName,
    "\ncollegeName:",
    collegeName
  );
}
personalDetail();

console.log("..........................  3  ...........................");

valueOne = "Vitrat";
valueTwo = "Anushka";

noOne = 1000;
noTwo = 2000;

function swapValueDude(argOne, argTwo) {
  console.log("Before Swap:", argOne, argTwo);
  var temp = argOne;
  argOne = argTwo;
  argTwo = temp;
  console.log("After Swap:", argOne, argTwo);
}

swapValueDude(valueOne, valueTwo);
swapValueDude(noOne, noTwo);

console.log("..........................  4  ...........................");

var a = 10.23;
var b = 600;
var c = 40;

var valueOne = "Hello";
var valueTwo = "Good";
var valueThree = "Morning";

function addThreeValues(paraOne, paraTwo, paraThree) {
  console.log("Before Addition:", paraOne, paraTwo, paraThree);
  var addValues = paraOne + paraTwo + paraThree;
  console.log("After Addition:", addValues);
}
addThreeValues(a, b, c);
addThreeValues(valueOne, valueTwo, valueThree);
