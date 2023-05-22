var myName = "Jagdish"; //Variable declaration and initialization

var myName = "Jagdish More"; //Re-declaration allowed

var myName = "Jagdish D. More"; //Update

console.log(`${myName}`);


let collegeName = "COEP";      //Variable declaration and initialization
 collegeName = "COEP Pune"; //Re-declaration notallowed
 collegeName = "COEP Pune"; //Update

 const PI = 3.14;
//  PI = 3.1456;          // Update not update


 // Scope == Accessibility

 let age = 25;
 if (age==25){
    var city = "Pune";
    // console.log(`City: ${city}`);
 }
// console.log(`City: ${city}`);

 

function show(){
var country = "India";
let age = 25;
 if (age==25){
    let city = "Pune";
    const PIN = 411057;
    let cityTwo = "Mumbai";
    var village = "Mulshi";
   
    console.log(`City: ${cityTwo}`);
 }

//console.log(`City: ${city}`);
//console.log(`City: ${cityTwo}`);
//console.log(`Pin: ${PIN}`);
console.log(`Village: ${village}`);

}
show();
// console.log(`Country: ${country}`);