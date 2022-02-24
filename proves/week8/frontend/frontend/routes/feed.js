const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

//add the get and post functions.

router.get('/', feedController.getProfessional);

module.exports = router;