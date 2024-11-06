"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (_req, res) => {
    res.send('¡Hola, Mundo!');
});
app.get('/hello', (_req, res) => {
    res.send('¡Hola, que se dice?!');
});
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`¡Hola, ${name}! ¿Cómo estás?`);
});
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    const mood = req.query.mood || 'feliz';
    res.send(`¡Hola, ${name}! Parece que estás ${mood} hoy.`);
});
app.get('/goodbye/:name', (req, res) => {
    const { name } = req.params;
    const time = req.query.time || 'pronto';
    res.send(`¡Hasta luego, ${name}! Nos vemos ${time}.`);
});
app.get('/html', (_req, res) => {
    res.send(`
    <style>
      .container { background-color: lightblue; padding: 20px; }
      .title { color: darkblue; }
      .text { color: darkgreen; }
    </style>
    <div class="container">
      <h1 class="title">¡Hola, Mundo!</h1>
      <p class="text">Este es un ejemplo de contenido HTML con colores.</p>
    </div>
  `);
});
app.get('/getusuario', (req, res) => {
    const name = req.query ? req.query.name : null;
    const lastname = req.query ? req.query.lastname : null;
    const age = req.query ? req.query.age : null;
    if (name || lastname || age) {
        res.send(`Hola ${name || 'identificate'} ${lastname || 'identificate'} tienes ${age || '24?'} años`);
        return;
    }
    res.send('No se encontraron los datos solicitados');
});
app.get('/json', (_req, res) => {
    res.send({
        url: 'https://www.google.com',
        title: 'Google',
        description: 'La mejor búsqueda del mundo',
    });
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map