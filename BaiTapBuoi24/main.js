// Lesson 1: isPrime -------------------------------
console.log("Lesson 1 : IsPrime ------------------------------");
function isPrime(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "Not a number";
  }
  if (n % 1 !== 0) {
    return "Not an Integer";
  }
  if (n <= 0) {
    return "Not a positive integer";
  }
  if (n === 1) {
    return "Not a prime number";
  }
  if (n === 2) {
    return "Is a prime number";
  }
  if (n > 2) {
    for (let i = 2; i <= n ** 0.5; i++) {
      if (n % i === 0) {
        return "Not a prime number";
      }
    }
  }
  return "Is a prime number";
}
console.log(isPrime("hello"));
console.log(isPrime(5.5));
console.log(isPrime(-5));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));

// Lesson 2: isPerfectNumber(n)
function isPerfectNumber(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "Not a number";
  }
  if (n % 1 !== 0) {
    return "Not an Integer";
  }
  if (n <= 0) {
    return "Not a positive integer";
  }
  if (n === 1) {
    return "Not a perfect number";
  }
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
      if (sum > n) {
        return "Not a perfect number";
      }
    }
  }
  if (sum !== n) {
    return "Not a perfect number";
  }
  return "Is a perfect number";
}
console.log("Lesson: 2 IsPerfect Number -------------------------");
console.log(isPerfectNumber("hello"));
console.log(isPerfectNumber(5.5));
console.log(isPerfectNumber(-5));
console.log(isPerfectNumber(1));
console.log(isPerfectNumber(6));
