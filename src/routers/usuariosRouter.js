//ruta de usuarios
const {Router}= require("express")
const enrutador = Router()
const {mostrarRutaUsuarios, registrarController, loginController} = require("../controllers/rutaUsuariosController")


//FUNCION (req,res) debe ir en el controlador 
enrutador.get("/listado", mostrarRutaUsuarios)
//FUNCION (req,res) debe ir en el controlador
enrutador.get("/registrar", registrarController)
enrutador.get("/login", loginController)


module.exports = enrutador