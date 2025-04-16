const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req: any, res: any) => {
  res.send('Hello, WeatherNow API!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
