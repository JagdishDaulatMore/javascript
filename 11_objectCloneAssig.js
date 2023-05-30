const bankSbi = {
    bankName: "SBI Bank",
    accountNo: 416002002,
    ifsc: "SBIN0000454",
  interestRate: "8.75%"
};

const bankLocation = {
street: 'Hinjewadi road',
city: 'Pune',
pin: 411057
};
// bankSbi = bankLocation;
let cloneObjects = Object.assign(bankSbi, bankLocation);
// Object.assign(bankSbi, bankLocation);

console.log(`=============== Clone  objects bankSbi and bankLocation =============`);
// console.log(`Clone oject bankSbi and bankLocation:`, cloneObjects);
console.table(cloneObjects);

const rateOfInterest = {
    homeLoanInterest: '8.75%',
    personalLoanInterest: '10.75%',
    dueInterest: '3.5%'
};


const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.log(`=============== SBI Details ===================`);
console.table(sbiDetails);


console.log(`=============== Traverse SBI Details ===================`);

for(const key in sbiDetails){
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}

