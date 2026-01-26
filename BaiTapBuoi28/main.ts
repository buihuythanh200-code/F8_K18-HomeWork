// Lesson 1:

interface PartTime {
  id: number;
  name: string;
  salary: number;
  hoursWorked: number;
}

const partTime: PartTime = {
  id: 2,
  name: "Binh",
  salary: 20,
  hoursWorked: 40,
};
partTime.hoursWorked = 45;
console.log(partTime);

// Lesson 2:
interface Employee {
  id: number;
  name: string;
  salary: number;
  getSalary(): number;
}

class FullTimeEmployee implements Employee {
  id: number;
  name: string;
  salary: number;
  getSalary(): number {
    return this.salary;
  }
}

class PartTimeEmployee implements Employee {
  id: number;
  name: string;
  salary: number;
  hoursWorked: number;

  getSalary(): number {
    return this.salary * this.hoursWorked;
  }
}

const calculateTotalSalary = function (employees: Employee[]): number {
  let sum: number = 0;
  employees.forEach((employee) => {
    sum += employee.getSalary();
  });
  return sum;
};

const fullTimeEmployee = new FullTimeEmployee();
fullTimeEmployee.id = 1;
fullTimeEmployee.name = "Thanh";
fullTimeEmployee.salary = 15000;

const partTimeEmployee = new PartTimeEmployee();
partTimeEmployee.id = 2;
partTimeEmployee.name = "Viet";
partTimeEmployee.salary = 3000;
partTimeEmployee.hoursWorked = 4;

console.log(calculateTotalSalary([fullTimeEmployee, partTimeEmployee]));
