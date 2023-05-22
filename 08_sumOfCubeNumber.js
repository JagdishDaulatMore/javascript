var sumOfCube = function (num) {
  var sum = 0;
  for (let index = 0; index <= num; index++) {
    sum = sum + index * index * index;
  }
  console.log(`Sum of cube of number is: ${sum}`);
};

sumOfCube(5);
sumOfCube(4);

function oddPositionChars(givenString) {
  var str = "";
  for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index);
    if (index % 2 != 0 && char != " ") {
      str = str + char;
    }
  }
  console.log(`${str}`);
}

oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be Angular IT Champ");
