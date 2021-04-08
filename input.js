// Stores the active TCP connection object.
let connection;
let movement;

const handleUserInput = (key) => {
  clearInterval(movement);
  switch (key) {
    case 'w':
      movement = setInterval(() => connection.write(`Move: up`), 50);
      break;
    case 'a':
      movement = setInterval(() => connection.write(`Move: left`), 50);
      break;
    case 's':
      movement = setInterval(() => connection.write(`Move: down`), 50);
      break;
    case 'd':
      movement = setInterval(() => connection.write(`Move: right`), 50);
      break;
    case '\u0003': // Ctrl + c (terminate game)
      process.exit();
      break;
  }
};

// Set up user interface to handle user input via stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;