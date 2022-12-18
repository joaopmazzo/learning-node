const express = require("express"); //importanto o express

const app = express(); //iniciando o express

app.get("/", function (req, res) {
  res.send("Welcome ;)");
});

app.get("/blog/:article?", function (req, res) {
  let article = req.params.article;

  if (article) {
    res.send("Welcome to artcile " + article + "!");
  } else {
    res.send("Welcome to my blog!");
  }
});

app.get("/channel/youtube", function (req, res) {
  let channel = req.query["channel"];

  if (channel) {
    res.send(channel);
  } else {
    res.send("No channel reported");
  }
});

app.get("/hi/:name/:company", function (req, res) {
  // req -> são os dados enviados pelo usuario;
  // res -> são os dados enviados para usuario
  let name = req.params.name;
  let company = req.params.company;

  res.send("Hi " + name + " from " + company);
});

app.listen(8000, function (err) {
  if (err) {
    console.log("Some error happened :(");
  } else {
    console.log("Application started with success :)");
  }
});
