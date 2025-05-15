const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rm534',
  password: 'my31825sql',
  database: 'projects'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = connection;
