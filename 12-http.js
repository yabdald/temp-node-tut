const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()

    }

    if (req.url === '/about') {
        res.end('Here is our shourt history')
    }

    res.end(`<h1>Oops!</h1>
    <p>this can't seem to be a the correct link </p>
    <a href="/">back to home</a>
    `)



})

server.listen(5000)