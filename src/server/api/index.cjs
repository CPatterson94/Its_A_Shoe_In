// Initialize the server and connect to the database
const express = require("express");
const { client } = require("./db.cjs");
const authRoutes = require("../auth/auth.cjs");

const app = express();
app.use(express.json());
client.connect();

app.use("/api/auth", authRoutes);
app.use("/api/users", require("./users.cjs"));
app.use("/api/products", require("./products.cjs"));
app.use("/api/cart", require("./cart.cjs"));
app.use("/api/orders", require("./orders.cjs"));

app.listen(8080, () => {
  console.log("App is running at port 8080");
});
