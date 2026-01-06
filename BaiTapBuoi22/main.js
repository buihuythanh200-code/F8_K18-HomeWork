//Lession 1: Academic performance classification
function getStudentLevel(score) {
  if (score >= 0 && score <= 10) {
    if (score >= 9 && score <= 10) {
      return "Excellent";
    } else if (score >= 8 && score < 9) {
      return "Very Good";
    } else if (score >= 6.5 && score < 8) {
      return "Good";
    } else if (score >= 5 && score < 6.5) {
      return "Average";
    } else {
      return "Weak";
    }
  } else {
    return "Error! Please re-enter";
  }
}
// test getStudentLevel
console.log(getStudentLevel(11));
console.log(getStudentLevel(9));
console.log(getStudentLevel(8.5));
console.log(getStudentLevel(6.7));
console.log(getStudentLevel(5));
console.log(getStudentLevel(3));

//Lesson2: Days in a Month Calculator
function getDaysInMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2:
      return 28;
    default:
      return "Error!";
  }
}
console.log("Month has: " + getDaysInMonth(3) + " days");

//Lesson 3: Even/Odd Check
function isEvenOrOdd(number) {
  let result = number % 2 === 0 ? "Even" : "Odd";
  return result;
}
console.log("The number is " + isEvenOrOdd(5));
//Lesson 4: Movie Ticket Price Calculation
function calcTicketPrice(age) {
  let price = age < 13 ? 0.5 * 100000 : 100000;
  return price;
}
console.log("The price is: " + calcTicketPrice(12));

//Lesson 5: Temperature Conversion
function toFahrenheit(celsius) {
  let result = celsius * 1.8 + 32;
  return result;
}
console.log(toFahrenheit(32));

//Lesson 6:Household Electricity Bill Calculation

function calcBillElectricity(consumption) {
  let price = 0;
  if (consumption <= 50) {
    price = 1678 * consumption;
    return price;
  } else if (consumption >= 51 && consumption <= 100) {
    price = 1678 * 50 + 1734 * (consumption - 50);
    return price;
  } else if (consumption >= 101 && consumption <= 200) {
    price = 1678 * 50 + 1734 * 50 + 2014 * (consumption - 100);
    return price;
  } else {
    price = 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * (consumption - 200);
    return price;
  }
}

console.log("Price of Bill Electricity: " + calcBillElectricity(205));
