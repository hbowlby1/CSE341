const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/view1', ( req, res, next) =>{
    // console.log("test");
    res.sendFile(path.join(rootDir, 'views', 'firstView.html'));
});

router.post('/', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;

