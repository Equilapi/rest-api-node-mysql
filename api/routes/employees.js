const express = require('express')
const router = express.Router()

// Conección con MySql
const mysqlConnection = require('../database')

router
    // Mostrar todos los Empleados
    .get('/employees/all', (req, res) => {
        mysqlConnection.query('SELECT * FROM employees', (err, result) => {
            if(!err) {
                res.json(result)
            } else {
                res.json(err)
            }
        })
    })

    // Detalle Empleado
    .get('/employee/detail/:id', (req, res) => {
        const { id } = req.params

        mysqlConnection.query('SELECT * FROM employees WHERE id = ? ', [id], (err, result) => {
            if(!err) {
                res.json(result[0])
            } else {
                res.json(err)
            }
        })
    })

    // Agregar nuevo Empleado
    .post('/employee/add', (req, res) => {
        const query = 'INSERT INTO employees SET ?'

        mysqlConnection.query(query, [req.body], (err) => {
            if(!err) {
                res.json({Status: 'Employee Saved.'})
            } else {
                res.json(err)
            }
        })
    })

    // Actulizar datos Empleado
    .put('/employee/update/:id', (req, res) => {

        const { id } = req.params
        const query = 'UPDATE employees SET ? WHERE id = ?'

        mysqlConnection.query(query, [req.body, id], (err) => {
            if(!err) {
                res.json({Status: 'Employee updated.'})
            } else {
                res.json(err)
            }
        })
    })

    // Elimimar Empleado
    .delete('/employee/delete/:id', (req, res) => {
        const { id } = req.params
        const query = 'DELETE FROM employees WHERE id = ?'

        mysqlConnection.query(query, [id], (err) => {
            if(!err) {
                res.json({Status: 'Employee Deleted.'})
            } else {
                res.json(err)
            }
        })
    })

module.exports = router