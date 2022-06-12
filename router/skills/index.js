const express = require('express');
const router = express.Router();
const controller = require('./skills.controller');

/* GET home page. */
router.get('/skills', controller.skills);

module.exports = router;