const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const dbo = require("../db/conn");

const collectionName = "accounts";

//Route to add an account for a new user
router.post("/add", (req, res) => {
  let db_connect = dbo.getDatabase();

  let account = new Account({
    email: req.body.email,
    password: req.body.password,
  });

  console.log(db_connect);

  db_connect
    .collection(collectionName)
    .insertOne(account)
    .then(() => res.json("Account added!"))
    .catch((err) => res.status(404).json("Error" + err));
});

//Route to retrieve the details of a specific account for validation purposes
router.get("/validate", (req, res) => {
    let db_connect = dbo.getDatabase();

    db_connect.collection("accounts").findOne({name: req.params.name}).then((Bio) => res.json(Bio)).catch((err) => res.status(404).json())
})


module.exports = router;
