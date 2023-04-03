const express = require("express");

const app = express();
const SERVER_PORT = 8000;

// telling Express to use EJS as view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let name = "Mazzo";
  let lang = "Javascript";

  res.render("Home", {
    name: name,
    lang: lang,
  });
});

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log("Some error happened :(");
  } else {
    console.log("Application stated with success :)");
  }
});
