const jswtoken = require("jsonwebtoken")
const autenticacion = (req, res, next) => {
    //requerir o capturar
    const token = req.header("autenticacion")?.split("")[1]
    if(!token){
        res.status(401).json({Error:"acceso debegadi,no provee token."})
    }
    //verificar con nmuestra clave secreta
    jswtoken.verify(token, process.env.JWT_SECRET, (error,usuario)=>{
        if(error){
        res.status(403).json({Error:"token invalido"})
        }
        req.usuario = usuario 
        next()
    })
};

module.exports = autenticacion