const http = require('http');

// function rqListener(req, res){

// }

const server = http.createServer((req, res) => {
    console.log(req);
    //don't call this if you don't want the website to go down
    //process.exit();
});

server.listen(3000);