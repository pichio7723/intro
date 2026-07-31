import express from 'express';
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PUERTO;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rutaImagen = path.join(__dirname, 'images.jpg');

app.get('/', (req, res) => {
  res.send('Holav mundo!');
});

app.get('/bart', (req, res) => {
  res.sendFile(rutaImagen);
});

app.get('/route1', (req,res) => {
  res.send(`<h1>Respuesta res<h1>`)
})

app.get('/route2', (req,res) => {
  res.json({"nombre" : "camilo", "edad" : "17"})
})

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