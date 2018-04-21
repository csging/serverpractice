const http = require("http")

const PORTO = 7000 //will tell you something nice
const PORTT = 7500 //is a jerk to you

// function handleRequest(request, response) {
//     response.end("It works")
// }

const serverO = http.createServer(function(req, res) {
    res.write('You look nice today!');
    res.end();
});


const serverT = http.createServer(function(req, res) {
    res.write('You look like awful today. go home.');
    res.end();
});

const logger = () => console.log("you win Christian!")

serverO.listen(7000, logger)
serverT.listen(7500, logger)