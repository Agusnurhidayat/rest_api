const { use } = require('express/lib/application');
var mysql = require('mysql');


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_restapi'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql sudah konek');
});

module.exports = conn;