const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./Routes/authRoutes.js");
const connectDatabase = require("./config/database.js");

connectDatabase();

app.use(express.json());
app.use(express.urlencoded(true));

app.use("/auth", authRoutes);

app.listen(process.env.port, () =>
  console.log("server started on " + process.env.port)
);
