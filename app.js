import express from 'express';
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PUERTO || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rutaImagen = path.join(__dirname, 'images.jpg');

app.get('/', (req, res) => {
  res.send('Holav mundo!');
});

app.get('/bart', (req, res) => {
  res.sendFile(rutaImagen);
});

app.get('/saludo/:nombre', (req, res) => {
  const nombreUsuario = req.params.nombre;
  const statusCode = 400;

  if (nombreUsuario.length < 3) {
    
    return res.status(statusCode).json({
      status: "error",
      statusCode: statusCode,
      message: "Error, la longitud del nombre es muy pequeña (mínimo 3 caracteres)"
    });
  }


  res.send(`Hola! ${nombreUsuario}`);
});

app.get('/producto/:id/:producto_nombre/:categoria', (req, res) => {
  let id = req.params.id;
  let producto = req.params.producto_nombre;
  let categoria = req.params.categoria;
  
  res.json({ 
    [producto]: id, 
    [producto]: categoria
  });
});


app.get('/route3/:nombre/:edad', (req,res) => {
  let nombreUsuario = req.params.nombre
  let edadUsuario = req.params.edad
  res.json({"nombre" : nombreUsuario, "edad" : edadUsuario})
})

app.get('/route4', (req,res) => {
  let numero = req.query.phone || 3118471307
  let orden = req.query.orden || "sin orden"
  let pagina = req.query.pagina || 1
  res.send(`<h1>Listado aprendices</h1>
    <h2> listado en orden ${orden} </h2>
    <p> pagina ${pagina} <p>
    <h3> Numero ${numero} </h3> `)
})

app.listen(port, () => {
  console.log(`Escuchando puerto : ${port}`);
});