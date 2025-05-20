const http = require("http")
const port = 80;

const  server = http.createServer((requisition, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Curso de Node');
})

server.listen(port, () => {
    console.log(`Escutando na porta do server http://localhost:${port}`)
})