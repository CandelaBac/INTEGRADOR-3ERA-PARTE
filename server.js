const express = require('express')
// const routerProductos = require('./routers/productos') // (1)

// Configuraciones
const app = express()
require('dotenv').config()

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routeo de mi aplicación
//app.use('/api/productos', routerProductos) // (1)
app.use('/api/productos', require('./routers/productos')) // (2)


app.use('/api/carrito', require('./routers/carrito')) 
app.use('/api/upload', require('./routers/upload')) 

const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if ( err ) throw new Error(`Sucedió un error ${err}`)

    console.log(`Servidor arriba, escuchando en el puerto: ${PORT}`)
})