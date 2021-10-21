const mongoose = require('mongoose')
const Schema =mongoose.Schema

const muebleSchema = new Schema({
    name: String,
    value: Number,
    status: Boolean
})

module.exports = mongoose.model('muebles', muebleSchema)    /* exportar modulo, envia modelo muebles que relaciona a tabla de mongo, lo recibe index.js  */
