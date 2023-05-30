const person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}
const address = {
    street: "Wakad Road",
    landmark: "Near Datta Mandir",
    city: "Mumbai",
    pin: 431220, 
    state: "MH",
    country: "India"
  } 

const marks = {
    english: 95,
    programming: 100,
    math: 89
}


// Object.assign(targetObject, source1, source2, source3);

Object.assign(person, address); // Copy object - address into the person object

const mergedObject = Object.assign({ }, address, marks); // Copy address and marks into the new object - mergedObject

console.table(person);
  
console.table(mergedObject);