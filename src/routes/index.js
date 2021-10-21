const express = require('express')
const router = express.Router()     /* el Router permite generar rutas y elementos */
const Mueble = require('../models/muebles') /* importo el modulo con el modelo de muebles.js */

//routes
router.get('/', async (req, res )=>{      /* metodo GET envia el Hola Mundo a /empleado de app.js */
    const muebles = await Mueble.find()
    res.send(muebles)
})

router.post('/', async (req, res)=>{
    /* res.send(req.body) */
    /* res.send(new Mueble(req.body)) */  /* crea un objeto de mongo y le crea un id*/
    const muebles = new Mueble(req.body)
    await muebles.save()     /* objeto para guardarse en mongo  */
    res.send(muebles)        
})      /* Metodo Post */

/* no aplica para autoincrementacles */
router.get('/:id', async (req, res)=>{      //peticion async 
    const mueble = await Mueble.findById(req.params.id) //traer elemento por id que viene por medio de la url
    res.send(mueble)
})

module.exports = router /* router contiene todas las urls que se van a poder utilizar desde a la app.js */