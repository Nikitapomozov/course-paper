let mysql = require('mysql');
const express  = require('express');

const app = express();
const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qpick'
});

let query = "SELECT * FROM headphones";

connection.query(query, function (err, results) {
    if (err) console.log(err);
    const headphones = results;
    for (let i = 0; i < headphones.length; i++) {
        console.log(headphones[i].name);
    }
});

connection.end();

