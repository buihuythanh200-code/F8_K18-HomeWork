export interface StudentI {
  setName(name: string): void;
  getName(): string;
  update(message: string): void;
}

export default class Student implements StudentI {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  update(message: string): void {
    console.log(`Học sinh ${this.name} nhận được thông báo: ${message}`);
  }
}
