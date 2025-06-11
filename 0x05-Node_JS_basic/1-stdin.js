process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.resume();

process.stdin.on('data', (chunk) => {
  process.stdout.write(`Your name is: ${chunk}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
