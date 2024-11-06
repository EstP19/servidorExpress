import express, { Request, Response } from 'express';

const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto
// Define una ruta en la raíz ('/') que responde con 'Hola, Mundo'
app.get('/', (_req: Request, res: Response) => {
  res.send('¡Hola, Mundo!');
});
app.get('/hello', (_req: Request, res: Response) => {
  res.send('¡Hola, que se dice?!');
});
// Ruta con params para recibir el nombre de un usuario en la URL
app.get('/hello/:name', (req: Request, res: Response) => {
  const { name } = req.params; // Captura el parámetro de la URL
  res.send(`¡Hola, ${name}! ¿Cómo estás?`);
});
// Ruta con query para recibir el nombre y el estado de ánimo
app.get('/greet/:name', (req: Request, res: Response) => {
  const { name } = req.params; // Captura el parámetro de consulta 'name'
  const mood = req.query.mood || 'feliz'; // Captura el parámetro de consulta 'mood'
  res.send(`¡Hola, ${name}! Parece que estás ${mood} hoy.`);
});
// Otra ruta con query y params para mostrar una despedida personalizada
app.get('/goodbye/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  const time = req.query.time || 'pronto'; // Usa query para definir cuándo será la despedida
  res.send(`¡Hasta luego, ${name}! Nos vemos ${time}.`);
});
// Ruta con contenido HTML
app.get('/html', (_req: Request, res: Response) => {
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
app.get('/getusuario', (req: Request, res: Response) => {
  const name = req.query ? req.query.name : null;
  const lastname = req.query ? req.query.lastname : null;
  const age = req.query ? req.query.age : null;

  if (name || lastname || age) {
    res.send(`Hola ${name || 'identificate'} ${lastname || 'identificate'} tienes ${age || '24?'} años`);
    return;
  }
  res.send('No se encontraron los datos solicitados');
});

app.get('/json', (_req: Request, res: Response) => {
  res.send({
    url: 'https://www.google.com',
    title: 'Google',
    description: 'La mejor búsqueda del mundo',
  });
});
// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
