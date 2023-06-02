let age = 21;

let ageStudent = age; // Cloning using = assignment operator
ageStudent = 22;

console.log(`age ${age}`);
console.log(`ageStudent ${ageStudent}`);

const student = {
    name: "Mohit",
    age: 21,
    city: "Pune"
}

const studentCopy = student; // = Assignment operator to perform Shallow clone

student.name = "Mohit Sharma";

console.table(student);
console.table(studentCopy.name);

console.log(`---------- Spread Operator -----------`);
const studentObj = {
    name: "Mohit",
    age: 21,
    city: "Pune"
}

// ... Spread operator
const clonedObject = {...studentObj};

clonedObject.city = "Mumbai";

console.log(clonedObject.city);// 
console.log(studentObj.city); // 


let person = {
    fullName: "Virat Kohli",
    age: 54,
    isMarried: true,
    address: {
        street: "Wakad Road",
        country : "India",
        pin : 223344
    }
}

// let clonePerson = person; // Shallow clone
// const deepClonedPerson = {...person} ; // This will not work
const deepClonedPerson = JSON.parse(JSON.stringify(person));

person.address.street = "Hinjewadi Road";

console.log(person.address.street );
console.log("Cloned Object ");
console.log(deepClonedPerson.address.street );



