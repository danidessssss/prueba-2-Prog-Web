const axios = require('axios');
const cheerio = require('cheerio');

class ScrapeService {
    async scrapeBooks() {
        try {
            const url = 'http://books.toscrape.com/';
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const libros = [];

            // Extraemos los datos de cada tarjeta de producto
            $('.product_pod').each((i, element) => {
                const titulo = $(element).find('h3 a').attr('title');
                const precio = $(element).find('.price_color').text();
                const disponibilidad = $(element).find('.availability').text().trim();

                libros.push({
                    titulo,
                    precio,
                    disponibilidad
                });
            });

            return libros;
        } catch (error) {
            throw new Error('Error al extraer datos de los libros: ' + error.message);
        }
    }
}

module.exports = new ScrapeService();