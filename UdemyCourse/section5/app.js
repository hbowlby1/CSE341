const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoute);
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);

// module.exports = path.dirname(require.main.filename);