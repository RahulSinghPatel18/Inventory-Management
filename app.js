const express = require("express");
const productRoutes = require("./routes/productRoutes");


const app = express();
// Read JsON body data
app.use(express.json());

// Mount the product routes
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is working 🔥🔥"
  });
});


module.exports = app;