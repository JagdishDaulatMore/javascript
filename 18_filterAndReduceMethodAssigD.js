class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. ===== All the employees from "Wipro" company =====`);
const empFromWipro = arrayEmps.filter((employee) => {
    return employee.emp_company == "Wipro";
});
const arrayWiproEmployees = empFromWipro.map((employee) => {
return employee.emp_name;
});
console.log(arrayWiproEmployees);
console.log("------------------------------------------------------------------");

console.log(`2. ===== All the employees from "IT" or "HR" department =====`);
const empFromItOrHrDepartment = arrayEmps.filter((employee) => {
    return (employee.emp_dept == "IT" || employee.emp_dept == "HR");
});

const arrayItOrHrEmployees = empFromItOrHrDepartment.map((employee) => {
return employee.emp_name;
});
console.log(arrayItOrHrEmployees);
console.log("------------------------------------------------------------------");

console.log(`3. ===== All the employees whose emp ID's are greater than 50 =====`);
const empId = arrayEmps.filter((employee) => {
    return (employee.emp_id>50);
});

const arrayOfIdsGreaterThan50Emplyoees = empId.map((employee) => {
return employee.emp_name;
});
console.log(arrayOfIdsGreaterThan50Emplyoees);
console.log("------------------------------------------------------------------");

console.log(`4. ===== All the employees whose name start with 'A' or 'V' or 'M' =====`);


arrayEmps.forEach((employee) => {
    if (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")) {
      console.log(employee.emp_name);
    }
  });
  console.log("------------------------------------------------------------------");

  console.log(`5. ===== All departments average salary of employee =====`);

  const empSalaries = arrayEmps.map( (employee) => {
    return employee.emp_salary;
});
const arrayOfEmployeesSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(` All departments eployees total salary is: ${arrayOfEmployeesSalary}`);
const averageSalary = arrayOfEmployeesSalary/empSalaries.length;
console.log(` Average salary of the employee for all the department is: ${averageSalary}`);

console.log("------------------------------------------------------------------");

console.log(`6. ===== Average salary of 'IT' department   =====`);


const employeeOfItDept = arrayEmps.filter((element) => {
    return (element.emp_dept=="IT") ;
    });

    const empSalariesOfItDept = employeeOfItDept.map( (employee) => {
        return employee.emp_salary;
    });

const arrayOfAverageSalaryOfIt =empSalariesOfItDept.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(` IT departments eployees total salary is: ${arrayOfAverageSalaryOfIt}`);
const averageSalaryOfIt = arrayOfAverageSalaryOfIt/employeeOfItDept.length;
console.log(` Average salary of the IT department employee is: ${averageSalaryOfIt}`);
