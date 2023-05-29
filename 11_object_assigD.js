const professor = {
    name: "Rakesh",
    age: 28,
    height: "5feet",
    city: "Pune",
    state: "Maharashtra",
    country: "India",

    degrees:{
        engineering: 'CSC',
        PHD:'Adv Computing',
    
    },

    certificates:['Hacker Rank Participation', ' Certificate in IFE course', ' Certificate in Adv Programming'],

    details: function(){
        console.log(`Professor Degrees: Engineering Degree: Engineering: ${degrees.engineering}, PHD: ${degrees.PHD}`);
    },

    getDetails: function(){
        let details = ` Engineering: ${this.degrees.engineering}, PHD: ${this.degrees.PHD}`;
        return details;
    },
    totalExperience: "14 years",
        
};
console.log('1) Professor object properties are: ', professor);

console.log(`2) Degree object properties are: `, professor.degrees);
console.log('3) Certificate array elements are: ', professor.certificates);

console.log('4) ======Professor total degrees====== ');
const details = professor.getDetails();
console.log(`Professor degrees are: ${details}`);

console.log('5) =======Professor total Experience======= ');
let totalExp = professor.totalExperience;
console.log(`Total Experience is: ${totalExp}`);

console.log(`6) ======Modify Property========= `);
console.log(`Existing object is: `, professor);
professor.city = "Mumbai";
console.log(`Modify city Pune to Mumbai is: `, professor);

console.log(`7) ========Add one new certificate========== `);
console.log(`Existing cerificates are: [${professor.certificates}]`);
let addCertificate = professor.certificates.push(" Oracle Certified");
console.log(`After add new certificate: [${professor.certificates}] `);

let arrLength = professor.certificates.length;
let lastArrElement =professor.certificates[arrLength-1];

console.log(`8) ========Last element of array========== `);
console.log(`Last element of array certificates is: ${lastArrElement}`);