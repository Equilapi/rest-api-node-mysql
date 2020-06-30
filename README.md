# rest-api-node-mysql
Servidor desarrollado en NodeJS + ExpressJS que consume los datos de un entorno MySql(Workbench).

# Instrucciones
1) Instalar dependencias ejecutando en el terminal "npm install"

2) Configurar el archivo /api/database.js y agregar password y database, credenciales de la base de datos del servidor MySQL.

3) Para levantar el proyecto ejecutar en el terminal "nodemon"

# CONSUMIR ENDPOINT DESDE POSTMAN

GET: http://localhost:7000/api/v1/employees/all (Todos los empleados)

POST: http://localhost:7000/api/v1/employee/add (Agregar nuevo empleado)

PUT: http://localhost:7000/api/v1/employee/update/{id} (Actulizar datos pasando parametro "id")

DELETE: http://localhost:7000/api/v1/employee/delete/{id} (Eliminar empleado pasando parametro "id")
