import Student from "./modules/Student";
import ClassRoom from "./modules/ClassRoom";

const class1: ClassRoom = new ClassRoom("Lớp JS cơ bản");

const studentA: Student = new Student("An");
const studentB: Student = new Student("Binh");
const studentC = new Student("Chi");

class1.addStudent(studentA);
class1.addStudent(studentB);
class1.addStudent(studentC);

class1.postAnnouncement("Mai kiểm tra OOP");
