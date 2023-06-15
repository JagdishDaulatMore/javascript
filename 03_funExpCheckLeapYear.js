console.log(`============== Program to Check year is leap year or not ==============`);
let checkLeapYear = function(leapYear){
    
if(leapYear==null || leapYear==undefined || leapYear==0 || leapYear=='NaN' || leapYear=="Twenty Twenty"){
    console.log(`${leapYear} : This is invalid input`);
}else{
    
    if ((leapYear % 4 ==0) && (leapYear % 100 !=0) || (leapYear % 400==0)) {
        console.log(`${leapYear}: This is a leap year`);
      
    } else {
        console.log(`${leapYear}: This is not a leap year`);

}
}
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear("NaN");
checkLeapYear(1750);
checkLeapYear("100");
checkLeapYear(0);

