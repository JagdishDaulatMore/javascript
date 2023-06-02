console.log(`============= 1) Array Clone Using Shallow clone ============`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const cloneArrayNums = arrayNums;
console.log(`Original array: [${arrayNums}]`);

console.log(`Clone array: [${cloneArrayNums}]`);
cloneArrayNums.push(55, 66);
console.log(`Clone array with update value 55 and 66 is: [${arrayNums}]\n`);

console.log(`============= 2) Deep Clone Using Spread Operator  ============`);
console.log(`Original array: [${arrayNums}]`);
const deepCloneArrayNums = [...arrayNums];
arrayNums.push(10, 25);
console.log(`Original array with update value 10 and 25 is: [${arrayNums}]`);
console.log(`Clone array: [${deepCloneArrayNums}]\n`);

console.log(`============= 3) Merge/Concat Array Using Spread Operator  ============`);

arrayEven = [2, 30, 14, 8];
const arrayConcat = [...arrayEven, ...arrayNums];
console.log(`Concat array is: [${arrayConcat}]\n`);

console.log(`============= 4) Create Object emplyee_info ============\n`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "40,0000INR",
        jun_month: "40,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: [" +91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77 "]
}

console.log(`============= 5) Employee Details  ============`);

employee_info.address.locality
employee_info.address.city
employee_info.address.state
employee_info.address.country
console.log(`a) Employee address is: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city
}, ${employee_info.address.state}, ${employee_info.address.country} `);

console.log(`b) Employee mobile numbers are: ${employee_info.mobiles}\n`);

console.log(`============= 6) Deep copy Using JSON.stringify()  ============`);


const deepCloneEmployeeInfo = JSON.parse(JSON.stringify(employee_info));

console.log(` Original salary is: ${deepCloneEmployeeInfo.salary.july_month}`);
const salaryupdate = deepCloneEmployeeInfo.salary.july_month= "80,0000INR"
console.log(`a) Update salary is: ${salaryupdate}`);

console.log(` Original object country is: ${employee_info.address.country}`);

const updateCountry = employee_info.address.country = "United Kingdom";
console.log(`b) Original object update country is: ${updateCountry}`);

console.log(`c) Original object update country value is: ${updateCountry}`);
console.log(`   Clone object update july_month value is: ${salaryupdate}`);