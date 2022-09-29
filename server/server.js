const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const pets = require("./routes/pet");

app.use(cors());
app.use(express.json());

// TODO: add required routes

// Get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.runDB().catch(console.dir);
});

app.use("/pets", pets);