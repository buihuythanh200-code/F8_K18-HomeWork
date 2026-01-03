//Task 1:
//Step1:
let classA = ["An", "Binh", "Chi"];
//Step2:
let classB = classA;
//Step3:
classB[0] = "An Updated";
//Step4:
console.log(classA);
//Why was the name "An" in classA changed even though you only modified classB? Explain using the concept of Memory Addresses (e.g, 0x01)
// Answer: Because classA holds the address of the array in memory. When classB is assigned from classA, classB copies the array’s memory address.. When element of classB is changed, element of array in memory change. When an element of classB is changed, the array in memory is modified. Therefore, the element in classA is also changed.

//Task 2:
let x = "10";
let y = 2;
console.log(x + y); //102
console.log(x - y); //8
console.log(x * "3"); //30
console.log("Hello" - y); //NaN
// Explain:
// 1. why the addition (+) results in "102" while the subtraction (-) results in 8.
//Answer1: Because when adding a string and a number, Javascript converts the number into a string. Therefore, the result is the string "102". However, if the operation is not addition, Javascript converts the string into  a number and performs the calculation. As a result, the output is 8.

//2.What does the result NaN in the last calculation mean? Why did it happen?
// The result NaN in the last calculation means “Not a Number”.When multiplying a number by a string, JavaScript converts the string into a number and performs the calculation. If the string cannot be converted into a number, the result of the operation will be NaN.

//Task3:
let age;
let mathScore;
let isVip;
age = 9;
mathScore = 10;
isVip = false;
let canEnter = (age >= 10 && mathScore > 7) || isVip;
console.log(canEnter);
//Logic Question: Is !(age < 10) mathematically the same as age >= 10?
//Answer: Is !(age < 10) mathematically the same as age >=10. The ! operator reverses the result of the condition (age < 10). Therefore, when age is not less than 10, it must be greater than or equal to 10.

// Task 4:
// 1. Question: Before running the code, predict the values of laptop.brand and laptop.spec.ram.
// Predict:
// laptop.brand = "Apple"
// laptop.spec.ram = "16GB"

// Explain why the changes made to myLaptop and mySpec affected the original laptop object.
// Explain: In theory, myLaptop and mySpec are only assigned the object's memory address, which is copied from the original assigned address. Therefore, when the data is changed, the object in memory is updated accordingly. As a result, the original laptop object, which references that memory address, is updated with the latest data.
