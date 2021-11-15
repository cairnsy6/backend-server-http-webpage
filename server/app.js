const http = require("http");

let allCats = ["Lennon", "Strawberry"];
let allDogs = ["Spike", "Buster"];
let allUnicorns = ["Pegasus", "Bonfire"];


const requestlisterner = (req, res) => {
  let body = { message: "Hello from the other side!" };
  let statusCode;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, DELETE");

  switch (req.url) {
    case "/":
      body = { message: "Welcome to the jungle" };
      break;
    case "/cats":
      if (req.method === "GET") {
        body = { cats: allCats };
      } else if (req.method === "DELETE") {
        allCats = [];
        statusCode = 204;
      }
      break;
    case "/dogs":
      if (req.method === "GET") {
        body = { dogs: allDogs };
      } else if (req.method === "DELETE") {
        allDogs = [];
        statusCode = 204;
      }
      break;
    case "/unicorns":
      if (req.method === "GET") {
        body = { unicorns: allUnicorns };
      } else if (req.method === "DELETE") {
        allUnicorns = [];
        statusCode = 204;
      }
      break;
  }
  res.statusCode = statusCode || 200;
  body = body && JSON.stringify(body);
  res.end(body);
};

const server = http.createServer(requestlisterner);

const startServer = (port, host) =>
  server.listen(port, host, () =>
    console.log(`Visit http://${host}:${port} for good stuff`)
  );

const closeServer = (cb) => server.close(cb);

module.exports = { startServer, closeServer };
