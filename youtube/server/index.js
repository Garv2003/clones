const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(morgan("common"));

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
