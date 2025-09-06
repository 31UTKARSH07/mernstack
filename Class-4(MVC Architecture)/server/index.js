const express = require("express");
require("dotenv").config();
const { connectDB } = require("./dbConfig");
const ProductRoutes = require("./routes/productRoutes");
const UserRoutes = require("./routes/userRoutes");

const app = express();
connectDB(process.env.dbUrl);
app.use(express.json());
app.use("/products", ProductRoutes);
app.use("user", UserRoutes);
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.listen(8081, () => {
  console.log(`Server Started`);
});
