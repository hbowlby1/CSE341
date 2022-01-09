const express = require('express');

const app = express();

app.use('/users', ( req, res, next) =>{
    // console.log("test");
    res.send("<p>Welcome Users</p>");
    console.log("Hello users");
    
});

app.use((req, res, next) => {
    console.log("Test");
    next();
});

app.use((req, res, next) =>{
    console.log("Second Middleware");
    res.send("<p> test</p>")
})





app.listen(3001);