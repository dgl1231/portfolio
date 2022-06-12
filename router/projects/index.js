const express = require('express');
const router = express.Router();
const controller = require('./projects.controller');

/* GET home page. */
router.get('/projects', controller.projects);

module.exports = router;