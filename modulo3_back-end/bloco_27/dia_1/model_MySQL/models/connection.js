// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'M*rott*18',
    database: 'model_example'});

module.exports = connection;
