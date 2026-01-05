//Lession 1: Academic performance classification
function studentClassfication(score) {
  if (score >= 0 && score <= 10) {
    if (score >= 9 && score <= 10) {
      return "Excelent";
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
// test studentClassfication
console.log(studentClassfication(11));
console.log(studentClassfication(9));
console.log(studentClassfication(8.5));
console.log(studentClassfication(6.7));
console.log(studentClassfication(5));
console.log(studentClassfication(3));

//Lesson2: Days in a Month Calculator
let month = 2;
switch (month) {
  case 1:
    console.log(`Month ${month} has 31 days`);
    break;
  case 2:
    console.log(`Month ${month} has 28 days`);
    break;
  case 3:
    console.log(`Month ${month} has 31 days`);
    break;
  case 4:
    console.log(`Month ${month} has 30 days`);
    break;
  case 5:
    console.log(`Month ${month} has 31 days`);
    break;
  case 6:
    console.log(`Month ${month} has 30 days`);
    break;
  case 7:
    console.log(`Month ${month} has 31 days`);
    break;
  case 8:
    console.log(`Month ${month} has 31 days`);
    break;
  case 9:
    console.log(`Month ${month} has 30 days`);
    break;
  case 10:
    console.log(`Month ${month} has 31 days`);
    break;
  case 11:
    console.log(`Month ${month} has 30 days`);
    break;
  case 12:
    console.log(`Month ${month} has 31 days`);
    break;
}

//Lesson 3: Even/Odd Check
let number = 4;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log("The number is " + result);
//Lesson 4: Movie Ticket Price Calculation
let age = 12;
let price = age < 13 ? 0.5 * 100000 : 100000;
console.log("The price is: " + price);

//Lesson 5: Temperature Conversion
function convertTemperature(celsius) {
  let result = celsius * 1.8 + 32;
  return result;
}
console.log(convertTemperature(32));

//Lesson 6:Household Electricity Bill Calculation

function caculateBillElectricity(consumption) {
  let price = 0;
  if (consumption <= 50) {
    price = 1678 * consumption;
    return price;
  } else if (consumption >= 51 && consumption <= 100) {
    price = 1678 * 50 + 1734 * ((consumption - 51) / 1 + 1);
    return price;
  } else if (consumption >= 101 && consumption <= 200) {
    price = 1678 * 50 + 1734 * 50 + 2014 * ((consumption - 101) / 1 + 1);
    return price;
  } else {
    price =
      1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * ((consumption - 201) / 1 + 1);
    return price;
  }
}

console.log("Price of Bill Electricity: " + caculateBillElectricity(205));
