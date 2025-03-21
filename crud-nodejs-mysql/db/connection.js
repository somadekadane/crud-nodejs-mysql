// Conexão com MySQL (db/connection.js) 

const mysql = require('mysql2'); 

const connection = mysql.createConnection({
    host:"127.0.0.1",
    post:"3306",
    user: 'root', // seu usuário MySQL 
    password: '', // sua senha MySQL 
    database: 'crud_db' 
   }); 

   connection.connect((err) => { 
    if (err) throw err; 
    console.log('Conectado ao MySQL!'); 
   }); 

   module.exports = connection;

  // app.listen(8000,()=> console.log("Servidor Online"));

