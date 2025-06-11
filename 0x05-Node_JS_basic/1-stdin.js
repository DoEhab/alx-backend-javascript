const readInput = require('readline');

readInput.createInterface({
  input: process.stdin,
  output: process.stdout,
}).question('Welcome to ALX, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}\n`);
  process.exit();
});
