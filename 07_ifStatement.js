console.log("I am going to office");

var isTrafficToDailyRoute = false;
if(isTrafficToDailyRoute){
    console.log("Daily route");
}

console.log("Office");

var num1 = 13;
var isEven = num1%2==0;
if (isEven) {  
    console.log(` Even number: ${num1}`);
} else {
    console.log(` Odd number: ${num1}`);
}
console.log("After if else statement");

function marriageEligibility(age, gender, name){
    if (age==null || age==undefined || gender==null || gender== undefined ) {
       console.log(`Invalid Input  ${name}  Age: ${age}  Gender: ${gender}` ); 
    } else {
       if ((gender == "male" && age <21 || age >90) ) {
          console.log(`Invalid Input ${name} Age: ${age}  Gender:${gender}` ); 
       } else {
            if (gender=="female" && age <18 || age > 90) {
                console.log(`Invalid Input  ${name} ${age} ${gender}` ); 
            } else {
                 if (gender=="transgender") {
                    console.log(`Not allowed ${name} ${age} ${gender} as constitution` ); 
                 } else { 
                    if (gender=="male") {
                        console.log(`You are eligible ${name} ${age} ${gender} `);
                    } else {
                        console.log(`You are eligible ${name} ${age} ${gender} `);
                    }
                 }
            }
       }  
    }
}
marriageEligibility(null, "male", "Shyam");
marriageEligibility(undefined, "male", "Shyam");
marriageEligibility(31, null, "Shyam");
marriageEligibility(24, undefined, "Shyam");

marriageEligibility(20, "male", "Ritik");
marriageEligibility(190, "male", "Satik");

marriageEligibility(16, "female", "Ketty");
marriageEligibility(98, "female", "Jenny");


marriageEligibility(23, "female", "Menny");
marriageEligibility(27, "male", "Bill");


marriageEligibility(23, "male", "Shyam");
marriageEligibility(21, "female", "Jenny");
marriageEligibility(33, "transgender", "Matoki");

marriageEligibility(16, "female", "Ketty"); 
marriageEligibility(20, "male", "Sandy"); 

marriageEligibility(350, "male", "Mandy"); 

marriageEligibility(-30, "male", "Mandy"); 

marriageEligibility(null, "male", "Mandy"); 

marriageEligibility(-30, NaN, "Mandy");

marriageEligibility(42, null, "Mandy");



