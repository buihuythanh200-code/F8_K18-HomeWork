// Class 1: Declare variable

// 1. Initialize three variables
let name = "Thanh";
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

// what is the difference between const and let?

//const is a way to declare a variable whose value cannot be reassigned after it has been set
//let is a way to declare a variable whose value can be reassigned after it has been set.

//The code const x = 10;  x = 20 is wrong because a variable declared with const cannot be reasigned.

// Class 3: Data type

//Step 1:
// 100: number; 100: number;
// TRUE: boolean
//[1,2,3]: array
//{name: "An", age: 20}: object
//null: null
// undefined: undefined

//Step2: Tạo 1 object student gồm:
const student = { name: "Thanh", age: 18, scores: [8, 9, 10] };
console.log(student);

//Class 4: Type casting

//string to number
let aStr = "1000";
let aNum = Number(aStr);
console.log("The data type of aNum: ", typeof aNum);

// number to string
let bNum = 1000;
let bStr = String(bNum);
console.log("The data type of bStr: ", typeof bStr);

//boolean to string
let cBoo = true;
let cStr = String(cBoo);
console.log("The data type of cStr: ", typeof cStr);

//Class 5: Truthy / Falsy

// Boolean(0): falsy
// Boolean(1): true
// Boolean(""): false
// Boolean("hello"): true
// Boolean(null): false
// Boolean([]): true

//Class 6: Array & memory
const numbers = [4, 3, 1, 5, 1];
console.log("The first element of numbers is ", numbers[0]);
console.log("The last element of numbers is  ", numbers[4]);

// When we assign const  a = numbers, both a and numbers refer to the same memory location
// Because this is an array stored in memory; numbers is the variable that holds the address that points to that array. Therefore, when a is assigned to numbers; we can understand that the address of the array if copied to a.
//However, when numbers is a string or a number, it is different. After we assign a = numbers, there are two separate memory values
