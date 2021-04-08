// Stores the active TCP connection object.
let connection;
let movement;
const { speed, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require('./constants');

const handleUserInput = (key) => {
  clearInterval(movement);
  switch (key) {
    case MOVE_UP_KEY:
      movement = setInterval(() => connection.write(`Move: up`), speed);
      break;
    case MOVE_LEFT_KEY:
      movement = setInterval(() => connection.write(`Move: left`), speed);
      break;
    case MOVE_DOWN_KEY:
      movement = setInterval(() => connection.write(`Move: down`), speed);
      break;
    case MOVE_RIGHT_KEY:
      movement = setInterval(() => connection.write(`Move: right`), speed);
      break;
    case '\u0003': // Ctrl + c (terminate game)
      process.exit();
      break;
    case 'j':
      connection.write(`Say: Having fun yet?`);
      break;
    case 'k':
      connection.write(`Say: Almost there!`);
      break;
    case 'l':
      connection.write(`Say: You can do it!`);
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