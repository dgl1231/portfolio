const express = require('express');
const router = express.Router();
const controller = require('./aboutme.controller');

/* GET home page. */
router.get('/aboutme', controller.aboutme);

module.exports = router;