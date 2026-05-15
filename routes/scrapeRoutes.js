const express = require('express');
const router = express.Router();
const scrapeController = require('../controllers/scrapeController');

// Endpoint solicitado
router.get('/scrape', scrapeController.getScrapeData);

module.exports = router;