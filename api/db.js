import mysql from 'mysql';

export const db = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "1991",
  database: "crud"
});

