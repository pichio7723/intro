// 1. Importamos el servicio que creaste en la carpeta services
const listarUsuarios = require('../services/usuariosService');

// Controlador para listar usuarios
const mostrarRutaUsuarios = async (req, res) => {
    try {
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al comunicarse con la base de datos.", Error: error.message });
    }
};

// Controlador para registrar usuarios
const registrarController = async (req, res) => {
   res.json({ mensaje: "Ruta para registrarme" });
};

// Controlador para inicio de sesión
const loginController = async (req, res) => {
    res.json({ mensaje: "Ruta para iniciar sesión" });
};

// 2. Exportamos las 3 funciones para que el router las pueda usar
module.exports = { 
    mostrarRutaUsuarios, 
    registrarController, 
    loginController 
};