// Lesson 1:
function getTriangleType(a, b, c) {
  let isNumA = typeof a === "number" && !isNaN(a);
  let isNumB = typeof b === "number" && !isNaN(b);
  let isNumC = typeof c === "number" && !isNaN(c);
  if (!isNumA || !isNumB || !isNumC) {
    return "Invalid Input";
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Not a triangle";
  }
  let isEquilateralTriangle = a === b && b === c;
  let isIsoscelesTriangle = a === b || a === c || b === c;
  let isRightTriangle =
    a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === a ** 2 + c ** 2 ||
    c ** 2 === a ** 2 + b ** 2;
  if (a + b > c && a + c > b && b + c > a) {
    if (isEquilateralTriangle) {
      return "Equilateral Triangle";
    } else if (isIsoscelesTriangle && isRightTriangle) {
      return "Isosceles Right Triangle";
    } else if (isIsoscelesTriangle) {
      return "Isosceles Triangle";
    } else if (isRightTriangle) {
      return "Right Triangle";
    } else {
      return "Scalene Triangle";
    }
  } else {
    return "Not a triangle";
  }
}

console.log(getTriangleType("4", 5, 6));
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
