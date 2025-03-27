var express = require('express');
const router = express.Router();
const parserServiceController = require('../controllers/parserServiceController');



router.get('/whoami', parserServiceController.getParserService);

module.exports = router;
