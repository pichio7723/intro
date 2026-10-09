const listarUsuarios = require("../services/usuariosService.js")
const holaRuta = async(req,res)=>{
    try{
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({mensaje: "Error al comunicarse con la base de datos.", Error: error.message})
    }
    
}
//ruta de registrarse
const registrarController = async(req,res)=>{
    res.json({mensaje: "ruta para registrarme"})
}
//ruta de login
const loginController = async(req,res)=>{
    res.json({mensaje: "ruta para registrarme"})
}

module.exports = {holaRuta, registrarController, loginController}