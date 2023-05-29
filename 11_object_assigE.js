const sbiBank = {
  bankName: "SBI Bank",
  location: "Pune",
  accountNo: 416002002,
  ifsc: "SBIN0000454",
  interestRate: "8.75%",
  showDetails: function(){
    console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }
};

// ifsc:UTIB0000004
// city:"Mumbai"

const axisBank = {
  bankName: "AXIS Bank",
  location: "Mumbai",
  accountNo: 400211002,
  ifsc: "UTIB0000004",
  interestRate: "8.90%",showDetails: function(){
    console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }

};

const hdfcBank = {
  bankName: "HDFC Bank",
  location: "Nashik",
  accountNo: 400211322,
  ifsc: "HDFC0000064",
  interestRate: "8.90%",
  showDetails: function(){
    console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }
};

const yesBank = {
  bankName: "YES Bank",
  location: "Kolhapur",
  accountNo: 416532002,
  ifsc: "YESB0000043",
  interestRate: "9.60%",
  showDetails: function(){
    console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }
};

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();