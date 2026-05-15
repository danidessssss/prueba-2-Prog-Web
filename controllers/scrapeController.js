const ScrapeService = require('../services/scrapeService');

exports.getScrapeData = async (req, res) => {
    const targetUrl = 'http://books.toscrape.com/'; // URL de prueba segura

    try {
        const data = await ScrapeService.scrapeBooks(targetUrl);
        // Respuesta estructurada (Requerimiento 5)
        res.status(200).json({
            status: 'success',
            count: data.length,
            data: data
        });
    } catch (error) {
        // Manejo de errores controlado (Requerimiento 6)
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};