const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express()
const indexRoutes = require('./routes/index')   /* solicito index.js  */

/* Configuraciones */
const port = 3000
            /* conectar */
mongoose.connect('mongodb+srv://root:toor@cluster0.r0jfa.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('connected')).catch(err => console.log(err)) /* por medio de promesa */            
// respond with "hello world" when a GET request is made to the homepage

/* =============================================== */
/* middlewares  */
/* middleware de autenticación */
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))     /* para manejar informacion sencilla */
/* =============================================== */
/* RUTAS */
/* app.method('ruta',handler)       handler=funcion*/
/* app.get('/', function (req, res) {
  res.send('¡Hello World!')
}) */
/* app.use('/muebles/', indexRoutes); */          //ruta a donde llegará lo que envie desde index.js / 
app.use('/muebles/', indexRoutes);  
/* =============================================== */
/* Inicio del servidor */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)    /* ${port} para incluir variable */
})