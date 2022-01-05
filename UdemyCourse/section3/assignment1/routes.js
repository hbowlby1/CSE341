const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>`);
        res.write(`<head><title>app1</title></head>`);
        res.write(`<body>`);
        res.write(`<h1>Welcome to Assignment 1</h1>`);
        res.write(`<form action="/create-user" method="POST"><input type="text" placeholder="username" name="userName"/>`);
        res.write(`<button type="submit">log in </button>`);
        res.write(`</form>`);
        res.write(`</body>`);
        res.write(`</html>`);
        return res.end();
    }

    if(url === '/users'){
        res.write(`<html>`);
        res.write(`<head><title>app1</title></head>`);
        res.write(`<body><ul><li>User1</li></ul></body>`);
        res.write(`<body><ul><li>User2</li></ul></body>`);
        res.write(`<body><ul><li>User3</li></ul></body>`);
        res.write(`</html>`);
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            // console.log(chunk);
            body.push(chunk)
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.statusCode=302;
        res.setHeader('Location', '/');
        res.end();
    }
};

exports.handler = requestHandler;