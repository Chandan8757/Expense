import cors from "cors";
import express from "express";
import { readdirSync } from "fs";
import db from "./db/db.js";
import "dotenv/config";
import router from "./routes/transactions.js";

// const express = require('express')
// const cors = require('cors');
// const { db } = require("./db/db").default;
// const { readdirSync } = require("fs");
const app = express();

// require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

// //routes
// readdirSync("./routes").map((route) =>
//   app.use("/api/v1", "./routes/" + route)
// );

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
