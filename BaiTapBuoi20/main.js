// Class 1: Declare variable

// 1. Initialize three variables
let name = "Thành";
let age = 18;
let isStudent = true;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is Student", isStudent);

// 2. Initalize and change value
let a = 5;
let b = 10;
a = 10;
b = 5;
console.log("a: ", a);
console.log("b:", b);

//Class 2: const / let / var

// const khác let ở điểm nào?

// const là kiểu khai báo biến trong đó biến sau khi được gán bằng 1 giá trị sẽ không được gán lại bởi 1 giá trị nào khác.
// let là kiểu khai báo biến trong đó biến sau khi được gán bằng 1 giá trị sẽ được gán lại giá trị khác cho biến này.

//Đoạn code const x = 10; x = 20 là sai vì giá trị được gán vào biến x không được thay đổi vì đã khai báo biến kiểu const

// Class 3: Data type

//Step 1:
// 100: number; 100: number;
// TRUE: boolean
//[1,2,3]: array
//{name: "An", age: 20}: object
//null: null
// undefined: undefined

//Step2: Tạo 1 object student gồm:
const student = { name: "Thành", age: 18, scores: [8, 9, 10] };
console.log(student);

//Class 4: Type casting

//string to number
let aStr = "1000";
let aNum = Number(aStr);
console.log("Kiểu dữ liệu của aNum: ", typeof aNum);

// number to string
let bNum = 1000;
let bStr = String(aStr);
console.log("Kiểu dữ liệu của bStr là:", typeof bStr);

//boolean to string
let cBoo = true;
let cStr = String(cBoo);
console.log("Kiểu dữ liệu của cStr: ", typeof cStr);

//Class 5: Truthy / Falsy

// Boolean(0): falsy
// Boolean(1): true
// Boolean(""): false
// Boolean("hello"): true
// Boolean(null): false
// Boolean([]): true

//Class 6: Array & bộ nhớ
const numbers = [4, 3, 1, 5, 1];
console.log("Phần tử đầu tiên là:", numbers[0]);
console.log("Phần tử cuối cùng là: ", numbers[4]);

// Giải thích khi gán const a = numbers thì a và numbers lại liên quan đến một vùng bộ nhớ
// Vì đây là 1 mảng array được lưu trữ vào bộ nhớ; và numbers chính là nơi được gán địa chỉ tới mảng trong bộ nhớ. Vì thế khi a được gán bằng numbers thì có thể hiểu là địa chỉ của arrays sẽ được sao chép qua a.
// Tuy nhiên khi numbers là string hoặc number thì khác. Vì sau khi gán a = numbers thì sẽ xuất hiện 2 vùng bộ nhớ.
