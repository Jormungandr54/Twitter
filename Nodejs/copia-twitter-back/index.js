const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Habilita CORS
app.use(express.json()); // Para parsear JSON

// Ruta de ejemplo (GET /api/tweets)
app.get('/api/tweets', (req, res) => {
  res.json([
    { id: 1, content: "Primer tweet", likes: 5 },
    { id: 2, content: "Segundo tweet", likes: 10 }
  ]);
});

// Ruta para crear tweets (POST /api/tweets)
app.post('/api/tweets', (req, res) => {
  const { content } = req.body;
  console.log("Nuevo tweet recibido:", content);
  res.status(201).json({ id: 3, content, likes: 0 });
});

// Ruta para likes (PATCH /api/tweets/:id/like)
app.patch('/api/tweets/:id/like', (req, res) => {
  const { id } = req.params;
  console.log(`Like al tweet ${id}`);
  res.json({ id, likes: 15 }); // Respuesta de ejemplo
});

app.listen(3000, () => {
  console.log('Backend corriendo en http://localhost:3000');
});