function gradeCalculation(marks){

//    console.log("----------------------------------------------------------------------"); 
    if (marks==undefined || isNaN(marks) || marks<=0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    }  else {
    //    console.log(`Valid marks : ${marks}`); 
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else {
        if (marks>=75 && marks<90) {
            console.log(`Excellent marks : ${marks}, Your grade is A`);
        } else {
            if (marks>=50 && marks<75) {
                console.log(`Good marks : ${marks}, Your grade is B`);
                
            } else {
                if (marks>=35 && marks<50) {
                    console.log(`Marks is : ${marks}, Your grade is C, Need improvement`);
                } else {
                    if ( marks<35 && marks>0) {
                        console.log(`Valid marks : ${marks}`);
                    } 
                        
                    
                 }
            }
        }
       }
    }

    
}
// Handling invalid inputs

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);

