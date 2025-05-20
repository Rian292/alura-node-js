const http = require("http")
const port = 8080;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Listagem de editoras'
}

const  server = http.createServer((requisition, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(rotas[requisition.url]);
})

server.listen(port, () => {
    console.log(`Escutando na porta do server http://localhost:${port}`)
})