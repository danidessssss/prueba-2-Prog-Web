const express = require('express');
const scrapeRoutes = require('./routes/scrapeRoutes');

const app = express();
const PORT = 3000;

// procesamiento json
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Servidor de Scraping Activo</h1><p>Usa el endpoint: <a href="/api/scrape">/api/scrape</a> para ver los libros.</p>');
});

app.use('/api', scrapeRoutes);


app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'La ruta solicitada no existe.'// Manejo de rutas no encontradas (404)
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`Prueba el scraping en: http://localhost:${PORT}/api/scrape`);
});