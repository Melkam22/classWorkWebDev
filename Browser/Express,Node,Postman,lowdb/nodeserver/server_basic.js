const http = require('http');
const fs = require('fs');//to attach the index file to the server


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });//changed for json
        let HTML = fs.readFileSync('./index.html');
        res.end(HTML);
    } else if (req.url === '/api/user') {
        res.writeHead(200, { 'Content-type': 'application/json' });//changed for json
        const json = JSON.stringify(
            {
                name: 'Melkam',
                residences: ['apartment', 'villa', 'castle', 'shared flat']
            })//to fetch not html but json file
        res.end(json);//text here it ll print this, or
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(8181, '127.0.0.1');
console.log();//text here it ll print this