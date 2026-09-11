const JsonWebToken = require('jsonwebtoken');
const autenticacion = (req, res, next) => {
    const token = req.header("autenticar")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({error: "denegado, no contiene token de acceso"});
    }
    JsonWebToken.verify(token, process.env.JWT_SECRET, (error, usuario) => {
        if (error) {
            return res.status(403).json({error: "token invalido"});
        }
        req.usuario = usuario;
        next();
    })
}

module.exports = autenticacion;