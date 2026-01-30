abstract class Employee {
  private id: number;
  private name: string;
  private salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public setSalary(salary: number): void {
    if (salary <= 0) {
      throw new Error("Salary must be greater than 0");
    }
    this.salary = salary;
  }
  public abstract calculateSalary(): number;
}

class Developer extends Employee {
  private overtimeHours: number;

  constructor(id: number, name: string, salary: number, overtimeHours: number) {
    super(id, name, salary);
    this.overtimeHours = overtimeHours;
  }

  public calculateSalary(): number {
    return this.getSalary() + this.overtimeHours * 50_000;
  }
}

class Manager extends Employee {
  private teamSize: number;
  constructor(id: number, name: string, salary: number, teamSize: number) {
    super(id, name, salary);
    this.teamSize = teamSize;
  }

  public calculateSalary(): number {
    return this.getSalary() + this.teamSize * 200_000;
  }
}

const developer = new Developer(1, "Thành", 30000, 8);
console.log(developer.getSalary());
console.log(developer.calculateSalary());

const manager = new Manager(1, "Việt", 40000, 3);
console.log(manager.getSalary());
console.log(manager.calculateSalary());
