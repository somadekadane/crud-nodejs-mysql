const express = require('express'); 
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/userRoutes'); 

const app = express(); 
const PORT = 5010; 

app.use(bodyParser.json()); 
app.use('/api', userRoutes); 

app.listen(5010, () => { 
 console.log(`Servidor rodando na porta ${PORT}`); 
}); 

// app.listen(8000,()=> console.log("Servidor Online"));