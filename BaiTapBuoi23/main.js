// Lesson 1:
function getTriangleType(a, b, c) {
  let isEquilateralTriangle = a === b && b === c;
  let isIsoscelesTriangle = a === b || a === c || b === c;
  let isRightTriangle =
    a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === a ** 2 + c ** 2 ||
    c ** 2 === a ** 2 + b ** 2;
  if (a + b > c && a + c > b && b + c > a) {
    if (isEquilateralTriangle) {
      return "This is an equilateral triangle";
    } else if (isIsoscelesTriangle && isRightTriangle) {
      return "This is an isosceles right triangle";
    } else if (isIsoscelesTriangle) {
      return "This is an isosceles triangle";
    } else if (isRightTriangle) {
      return "This is a right triangle";
    } else {
      return "This is a scalene triangle";
    }
  } else {
    return "This isn't a triangle";
  }
}

console.log(getTriangleType(3, 4, 5));
console.log(getTriangleType(6, 3, 5));
console.log(getTriangleType(2, 3, 5));

// Lesson 2:
function isPerfectSquare(n) {
  if (n < 0) {
    return false;
  }
  let x = n ** 0.5;
  return x % 1 === 0;
}
let result = isPerfectSquare(4);
if (result) {
  console.log("This number is a perfect square.");
} else {
  console.log("This number isn't a perfect square.");
}
