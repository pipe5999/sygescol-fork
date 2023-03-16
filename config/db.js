import mysql from "mysql2";

// años actual
const date = new Date().getFullYear();
const connection0 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER,
  password: process.env.APP_PASSWORD,
  port: 3306,
  database: `${process.env.APP_DATABASE}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,

})
const connection1 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER1,
  password: process.env.APP_PASSWORD1,
  port: 3306,
  database: `${process.env.APP_DATABASE1}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection2 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER2,
  password: process.env.APP_PASSWORD2,
  port: 3306,
  database: `${process.env.APP_DATABASE2}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection3 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER3,
  password: process.env.APP_PASSWORD3,
  port: 3306,
  database: `${process.env.APP_DATABASE3}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection4 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER4,
  password: process.env.APP_PASSWORD4,
  port: 3306,
  database: `${process.env.APP_DATABASE4}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection5 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER5,
  password: process.env.APP_PASSWORD5,
  port: 3306,
  database: `${process.env.APP_DATABASE5}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection6 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER6,
  password: process.env.APP_PASSWORD6,
  port: 3306,
  database: `${process.env.APP_DATABASE6}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection7 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER7,
  password: process.env.APP_PASSWORD7,
  port: 3306,
  database: `${process.env.APP_DATABASE7}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
const connection8 = mysql.createPool({
  host: process.env.APP_SERVER,
  user: process.env.APP_USER8,
  password: process.env.APP_PASSWORD8,
  port: 3306,
  database: `${process.env.APP_DATABASE8}${date}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
export {
  connection0,
  connection1,
  connection2,
  connection3,
  connection4,
  connection5,
  connection6,
  connection7,
  connection8,
};
