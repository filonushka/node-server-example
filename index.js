// алгоритм: создать сервер - запустить сервер - научить сервер обрабатывать запросы

const { createServer } = require("http");

const server = createServer(handleRequest);

server.listen(3000);

// написать функцию обработчик запросов и передать ее в функцию, создающую сервер

function handleRequest(request, response) {
  response.end("hello");
  console.log(request);
}
