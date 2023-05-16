console.log(`1. ............................Male Marriage Eligibility Check..........................`);
 function maleMarriageEligibility(gender, age, boyName){
var result = gender == "Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage`:  `Hey ${boyName} you are not eligible for Marriage`;
console.log(`${result}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(`1. ............................Female Marriage Eligibility Check..........................`);

function femaleMarriageEligibility(gender, age, girlName){
    var result = gender == "Female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage`:  `Hey ${girlName} you are not eligible for Marriage`;
    console.log(`${result}`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");