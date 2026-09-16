const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is working"
  });
});

app.post("/products", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Product received",
    product: req.body
  });
});

module.exports = app;