let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true,
    address: {
      street: "Wakad Road",
      landmark: "Near Datta Mandir",
      city: "Pune",
      pin: 431220, // 556677
      state: "MH",
      country: "India",
    },
    childNames: ["ABC", "Xyz", "Pqr"],
    walk: function (totalWalk) {
      console.log(`${this.name} Yes.. I can walk ${totalWalk}`);
    },
    details: function () {
      console.log(
        `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
      );
    },
    getDetails: function () {
      let details = `Name: ${this.name}, Age: ${this.age}, Is Married: ${this.isMarried}, City: ${this.city}`;
      return details;
    },
  };
  console.log(`Type of person is ${typeof person}`);
  
  console.log(`------- Accessing object properties----------`);
  // Dot Notation .
  const personName = person.name;
  const personHeight = person["height"];
  console.log(`Person name is : ${personName}`);
  console.log(`Person City is : ${person.city}`);
  
  console.log(`Person Height is : ${person["height"]}`);
  
  console.log(`------- Updating object properties----------`);
  person.city = "Mumbai";
  person.isMarried = false;
  console.log(`Person City is : ${person.city}`);
  console.log(`Person married status is : ${person.isMarried}`);
  
  console.log(`------- Adding object properties----------`);
  person.gender = "Male";
  person.state = "MH";
  
  console.log(`------- Deleting object properties----------`);
  delete person.height;
  
  console.log(`------- Invoking or calling object method----------`);
  person.walk("5KM");
  person.details();
  const details = person.getDetails();
  console.log(`Details about person is: ${details}`);
  
  console.log(`============ Accessing nested object properties==================`);
  let personCountry = person.address.country;
  console.log(personCountry);
  person.address.pin = 556677;
  console.log(person.address);
  
  
  //console.log(person);
  // console.table(person);
  
  console.log(`============ Creating an empty object==================`);
  let student = {};
  console.log(student);
  student.marks = "99%";
  console.log(student);
  
  const isCityAvailable = "city" in student;
  console.log(`Is City available in student object: ${isCityAvailable}`);
  console.log(`Is marks available in student object: ${"marks" in student}`);
  
  
  