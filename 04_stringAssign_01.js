function stringBasics() {
  console.log("My dream company is:", "Google");
  var hobby1 = "Traveling";
  var hobby2 = "Playing Cricket";
  var hobby3 = "Trekking";

  console.log(
    "My hobies are:",
    "1) hobby1:",
    hobby1,
    "2) hobby2:",
    hobby2,
    "3) hobby3:",
    hobby3
  );

  var hobby1Length = hobby1.length;
  console.log("Total number of character in hobby1 are:", hobby1Length);

  var hobby2Length = hobby2.length;
  console.log("Total number of character in hobby2 are:", hobby2Length);

  var hobby3Length = hobby3.length;
  console.log("Total number of character in hobby3 are:", hobby3Length);

  var sum = hobby1Length + hobby2Length + hobby3Length
  console.log("Total number of character in hobby1, hobby2 and hobby3 are:", sum);
  
}

stringBasics();
