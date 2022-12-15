const http = require("http");

const port = 8080;
const host = "localhost";

const author = {
  name: "João Paulo Mazzo",
  age: 22,
  nationality: "Brazilian"
}

const requestListener = function (req, res) {
  switch (req.url) {
    case "/author":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(author));
      break;
    default:
      res.writeHead(200);
      res.end("Welcome on simple http node application");
      break;
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, function () {
  console.log(`Server is running on http://${host}:${port}`);
})