const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes);
app.use(shopRoute);
app.use((req, res, next) =>{
    res.status(404).send("<p>Type in /view1 in the URL");
});

app.listen(3001);

// module.exports = path.dirname(require.main.filename);