function marriageEligibility(age, gender, name){
    if(age== null || age==undefined || gender==null|| gender==undefined){
    console.log(`Invalid Input${age} ${gender}`);
}
else{
    if(gender== "male" && age<=0 || age>90){
console.log(`Invalid Input ${age} ${gender} ${name}`);
    }
else{
    if(gender== "female" && age<=0 || age>90){
        console.log(`Invalid Input ${age} ${gender} ${name}`);
    }else{
        if(gender == "transgender"){
            console.log(`Not Allowed ${age} ${gender} ${name}`);
  
        }else{
            if( gender== "male" && age >=21   ){
                console.log(`Eligible for marriage ${age} ${gender} ${name}`);
            }else{
                if(gender== "male" && age<21){
                    console.log(`Not Eligible for marriage ${age} ${gender} ${name}`);
                }else{
                    if(gender== "female" && age>=18){
                        console.log(`Eligible for marriage ${age} ${gender} ${name}`);
                    }else{
                        if(gender== "female" && age<18){
                        console.log(`Not Eligible for marriage ${age} ${gender} ${name}`);
                    }
                    }
                }
            }
        }
    }
}
}
}

marriageEligibility(20, "female", "Rupa")
marriageEligibility(17, "female", "Rupa")
marriageEligibility(91, "female", "Rupa")
marriageEligibility(0, "female", "Rupa")
marriageEligibility(-3, "female", "Rupa")
marriageEligibility(18, "female", "Rupa")
marriageEligibility(30, "female", "Rupa")

marriageEligibility(20, "null", "Rupa")
marriageEligibility(17, "undefined", "Rupa")



marriageEligibility(20, "male", "Rakesh")
marriageEligibility(17, "male", "Rakesh")
marriageEligibility(91, "male", "Rakesh")
marriageEligibility(0, "male", "Rakesh")
marriageEligibility(-3, "male", "Rakesh")
marriageEligibility(18, "male", "Rakesh")
marriageEligibility(30, "male", "Rakesh")
marriageEligibility(20, "null", "Rakesh")
marriageEligibility(17, "undefined", "Rakesh")