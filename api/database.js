const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PASSWORD',
    database: 'DATABASE_NAME',
    insecureAuth: true
})

mysqlConnection.connect(function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log('Base de datos conectada')
    }
})

module.exports = mysqlConnection