import Student from "./Student.ts";
export interface ClassRoomI {
  addStudent(student: Student): void;
  removeStudent(student: Student): void;
  notify(message: string): void;
  postAnnouncement(message: string): void;
}

export default class ClassRoom implements ClassRoomI {
  private name: string;
  private students: Student[];
  constructor(name: string) {
    this.name = name;
    this.students = [];
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  removeStudent(student: Student): void {
    this.students = this.students.filter((item) => item !== student);
  }
  notify(message: string): void {
    this.students.forEach((student) => student.update(message));
  }
  postAnnouncement(message: string): void {
    console.log(`[${this.name}] Thông báo mới: `);
    this.notify(message);
  }
}
