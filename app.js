const express = require("express");
const Product = require("./models/Product");
const productRoutes = require("./routes/productRoutes");


const app = express();
app.use(express.json());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is working"
  });
});


module.exports = app;