const express = require('express');  
const app = express();
const port = process.env.PUERTO || 3000;

const manejadordeErrores = require("./middleware/manejadorErrores");
const RegistrodeQueris = require("./middleware/registromiddleware");
const autenticacion = require("./middleware/autenticacion");
const jwt = require("jsonwebtoken");

// MIDDLEWARES GENERALES 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(RegistrodeQueris);


app.get("/", (req, res) => {
    res.send("Aprendices ficha 3407186");
});

app.post("/registrar", (req, res) => {
    const usuariobd = {
        "usuario": "camilo",
        "clave": "root1234"
    };
    
    const { usuario, clave } = req.body;
    
    if (!usuario || !clave) {
        return res.status(400).json({ mensaje: "Faltan usuario o clave en la petición" });
    }

    if (usuario !== usuariobd.usuario || clave !== usuariobd.clave) {
        return res.status(400).json({ mensaje: "credenciales NO validas" });
    }

    // Corregido: cambié 'req.usuario' por 'usuario'
    const token = jwt.sign(
        { "usuario": usuario },
        process.env.JWT_SECRET || "firma_secreta_por_defecto",
        { expiresIn: "1h" }
    );
    
    return res.json({ token });
});

// ==========================
// CRUD APRENDICES
// ==========================

app.get("/api/aprendices", (req, res) => {
    res.json({ mensaje: "lista de aprendices" });
});

app.post("/api/aprendices", (req, res) => {
    res.status(201).json({ mensaje: "crear aprendiz" });
});

app.get("/error", (req, res, next) => {
    next(new Error("error intencional"));
});

app.get("/rutaprotegida", autenticacion, (req, res) => {
    res.status(200).json({ mensaje: "ingreso a la protegida" });
});

app.put("/api/aprendices/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({ mensaje: `Editar aprendiz con id ${id}` });
});

app.delete("/api/aprendices/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({ mensaje: `Eliminar aprendiz con id ${id}` });
});


// ==========================
app.post("/rutaJson", (req, res) => {
    const todosDatos = req.body;
    const edad = req.body.edad2;
    
    if (edad >= 18) {
        return res.json({ mensaje: "es mayor", datosJson: todosDatos });
    } else {
        return res.json({ mensaje: "es menor", datosJson: todosDatos });
    }
});


app.post("/ruta/formulario", (req, res) => {
    const todosDatos = req.body;
    const programa = req.body.programa;
    
    return res.json({
        todosDatos: "todosdatos",
        Miprograma: programa,
        datosFormulario: todosDatos
    });
});

app.use(manejadordeErrores);

// ==========================
// INICIAR SERVIDOR (Siempre al final)
// ==========================
app.listen(port, () => {
  console.log(`SERVIDOR: http://localhost:${port}`);
});
