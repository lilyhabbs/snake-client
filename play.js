const connect = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

// Set up user interface to handle user input via stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

setupInput();