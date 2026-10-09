//importar mi aplicacion app
const app = require("./app")

//verificar el puerto de las variables de entorno
const PUERTO = process.env.PUERTO || 3333

//Imprimo por consola el link del servidor 
app.listen(PUERTO, ()=>{
    console.log(`MI SERVIDOR: http://localhost:${PUERTO}`)
})