const readInput = require('readline');

const rl = readInput.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Welcome to ALX, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\n`);
  rl.close(); // Triggers the 'close' event
});

rl.on('close', () => {
  console.log('This important software is now closing\n');
});
