const {Router} = require("express")
const enrutador = Router()
const {holaRuta, registrarController, loginController} = require("../controllers/rutaUsuariosController")

//funcion (req, res) debe ir en el controlador 
enrutador.get("/listado", holaRuta)
enrutador.post("/registrar", registrarController)
enrutador.post("/login", loginController)

module.exports = enrutador