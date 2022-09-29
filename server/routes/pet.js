const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();
const Bio = require("../models/Bio");
const dbo = require("../db/conn");
const { v4: uuidv4 } = require('uuid');

const collectionName = "pets";

//adding bio information for a new pet
router.post("/add", (req, res) => {
    let db_connect = dbo.getDatabase();

    let pet = new Bio ({
        name: req.body.name,
        species: req.body.species,
        breed: req.body.breed,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        age: req.body.age,
        description: req.body.description
    })

    console.log(db_connect);

    db_connect.collection("pets").insertOne(pet).then(() => res.json("Pet added!"))
    .catch((err) => res.status(404).json("Error" + err))
});

router.get("/view", (req, res) => {
    Bio.find().then((Bio) => res.json(Bio).catch((err) => res.status(404).json({})
    ));
});



module.exports = router;