const http = require("http")
const fs = require("fs")

const PORT = 8000

const routeRequest = (path, res) => {
    switch (path) {
        case "/":
            res.writeHead(200, { "content-Type": "text/html" })
            res.end(home())
            break
        case "/Foods":
            res.writeHead(200, { "content-Type": "text/html" })
            res.end(foods())
            break
        case "/Movies":
            res.writeHead(200, { "content-Type": "text/html" })
            res.end(movies())
            break
        case "/Css":
            res.writeHead(200, { "content-Type": "text/html" })
            res.end(css())
            break
        default:
            res.writeHead(200, { "content-Type": "text/html" })
            res.end(notFound(path))
            break
    }
}

const server = http.createServer(routeRequest)

const root = () => {
    return "<html>" +
        "<body><h1>Home Page</h1>" +
        "<a href='/root'>Root</a>" +
        "</body></html>"
}

const foods = () => {
    return "<html>" +
        "<body><h1>My Favorite Foods</h1>" +
        "<a href='/foods'>Foods</a>" +
        "</body></html>"
}

const movies = () => {
    return "<html>" +
        "<body><h1>My favorite movies</h1>" +
        "<a href='/movies'>Movies</a>" +
        "</body></html>"
}

const css = () => {
    return "<html>" +
        "<body><h1>My Favorite CSS:</h1>" +
        "<a href='/css'>css</a>" +
        "</body></html>"
}

const notFound = () => {
    return "<html>" +
        "<body><h1>404'd!</h1>" +
        "<a href='/notFound'>not Found</a>" +
        "</body></html>"
}




function handleRequest(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "content-Type": "text/html" })
        res.end(data)
    })
}

const logger = (PORT) => () => {
    console.log("server listening")
}
server.on('error', (error) => console.log(`ERROR: ${error}`))
server.listen(PORT, logger(PORT))