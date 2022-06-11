const express = require('express');
const router = express.Router();

const main = require('./main/index');
/*
const aboutme = require('./aboutme/index');
const skills = require('./skills/index');
const archiving = require('./archiving/index');
const projects = require('./projects/index');
*/
router.use('/main', main);
/*
router.use('/aboutme', aboutme);
router.use('/skills', skills);
router.use('/archiving', archiving);
router.use('/projects', projects);
*/
module.exports = router;
