class Vehicle {
    constructor(brand, model, price,  color, speed){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.speed = speed;
}
}

const rollsRoyce = new Vehicle("Rolls-Royce", "Rolls-Royce Phantom", "11.20 Crore", "Midnight Sapphire Blue", "250 kmph");
const rangeRover = new Vehicle("Range-Rover", "Range Rover SV LWB ", "4.94 Crore", "Portofino Blue. Blue", "250 kmph");
const mercedesBenz = new Vehicle("Mercedes-Benz", "Mercedes-Benz Maybach GLS", "2.92 Crore", "Cavansite Blue", "250 kmph");
const audi = new Vehicle("Audi", "Audi RS Q8", "2.63 Crore", "Floret Silver Metallic", "250 kmph");
const bmw = new Vehicle("BMW", "BMW 7 Series ", "2.02 Crore", "Oxide Grey Metallic.", "250 kmph");

const arrayOfVehicle = [rollsRoyce, rangeRover, mercedesBenz, audi, bmw]

console.log(`============================= Vehicle details ==============================\n`);
for (const vehicle of arrayOfVehicle) {
    console.log(`Vehicle details: ${vehicle.brand}, ${vehicle.model}, ${vehicle.price}, ${vehicle.color}, ${vehicle.speed}\n`);
}

console.log(`============================= College details ==============================`);

class College {
   
    constructor(name, department, city, phoneNo){
        this.name = name;
        this.department = department;
        this.city = city;
        this.phoneNo = phoneNo;
        
}
}
const coep = new College("COEP", "Engineering", "Pune", 02025507000);
const sinhgad = new College("Sinhgad", "Engineering", "Mumbai", 02024354705);
const wadia = new College("Wadia", "Engineering", "Pune", 0202616233);
const dyPatil = new College("Raisoni", "Engineering", "Kolhapur", 02312601433);

traverseObject(coep);
traverseObject(sinhgad);
traverseObject(wadia);
traverseObject(dyPatil);

function traverseObject(collegeObject){
for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
        const element = collegeObject[key];
        
        console.log(`${key}, ${element} `);
        
    }
    
}
console.log(`*****************************************************************************`);
}