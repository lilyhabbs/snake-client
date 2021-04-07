const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    const initials = 'LH';
    conn.write(`Name: ${initials}`);
  });
  
  conn.on('data', (message) => {
    console.log('Server says: ', message);
  });
  
  return conn;
};


module.exports = connect;