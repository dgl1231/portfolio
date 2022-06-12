const express = require('express');
const router = express.Router();

const main = require('./main/index');
router.get('/', main);

const aboutme = require('./aboutme/index');
router.get('/aboutme', aboutme);

const skills = require('./skills/index');
router.get('/skills', skills);

const archiving = require('./archiving/index');
router.get('/archiving', archiving);

const projects = require('./projects/index');
router.get('/projects', projects);



module.exports = router;
