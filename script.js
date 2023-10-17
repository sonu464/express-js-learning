const { error } = require("console");
const express = require("express");
// In the next line, we run the express
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.use(function (req, res, next) {
  console.log("Middleware Working!");
  next();
});

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login", { permission: "Allow" });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/error", function (req, res, next) {
  //  new Error 1st way
  throw Error("Something Went wrong");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server is started at port ${port}`);
});
