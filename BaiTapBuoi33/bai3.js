// Task 3: Build countdown function using setInterval
function startCountdown(seconds) {
  const interValid = setInterval(() => {
    if (seconds === 0) {
      clearInterval(interValid);
    }
    console.log(seconds);
    seconds--;
  }, 1000);
}
startCountdown(5);
