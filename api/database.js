const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '045531673',
    database: 'business_portal',
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