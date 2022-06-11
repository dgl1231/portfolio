const express = require('express');
const router = express.Router();
const controller = require('./archiving.controller');

/* GET home page. */
router.get('/', controller.archiving);

module.exports = router;