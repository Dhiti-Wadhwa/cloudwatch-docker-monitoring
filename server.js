const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>CloudWatch Monitoring Demo</title>
        </head>
        <body>
            <h1>CloudWatch Monitoring Demo</h1>
            <p>Dockerized application running successfully.</p>
            <p>Monitoring: CPU | Memory | Disk | Logs</p>
        </body>
        </html>
    `);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});