const express = require('express');
const router = express.Router();
const controller = require('./projects.controller');

/* GET home page. */
router.get('/', controller.projects);

module.exports = router;