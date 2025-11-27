const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds for countdown: ", (answer) => {
  let seconds = parseInt(answer, 10);

  let timer = setInterval(() => {
    console.log(`Remaining time: ${seconds} seconds`);
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Simulate delayed key detection with setTimeout
  setTimeout(() => {
    process.stdin.on("data", (data) => {
      if (data.toString().trim() === "s") {
        clearInterval(timer);
        console.log("Countdown stopped by user!");
        rl.close();
      }
    });
  }, 500);
});