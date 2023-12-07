/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err.message);
});

db.once("open", () => console.log("Database connected"));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

const RegisterRoute = require("./routes/register");
const LoginRoute = require("./routes/login");
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
