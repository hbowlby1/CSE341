const path = require('path');
const express = require('express');
const router = express.Router();
const adminRoutes = require("./admin");
const rootDir = require('../util/path');

router.get('/view2', (req, res, next) =>{
    res.sendFile(path.join(rootDir, "views", 'secondView.html'));
});

module.exports = router;