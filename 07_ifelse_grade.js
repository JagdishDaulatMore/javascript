
console.log(`==================Vote Eligibility=======================`);
function voteEligibility(age) {
    if(age == null || age == undefined){
    console.log(`Invalid Input: Age: ${age}`); 
    }
    else{
if((age<=0 || age>120)){
console.log(`Invalid data: Age: ${age}`); 
}
else
if(age>=18){
    console.log(`You are eligible for voting: Age: ${age}`);  
}else{
    console.log(`You are not eligible for voting: Age: ${age}`);  
}
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
