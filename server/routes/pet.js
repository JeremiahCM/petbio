const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();
const Bio = require("../models/Bio");

//adding bio information for a dog
router.post("/dog", (req, res) => {
    const id = 0;
    const name = req.body.name;
    const species = "dog";
    const breed = req.body.breed;
    const gender = req.body.gender;
    const birthday = req.body.birthday;
    const age = req.body.age;
    const description = req.body.description;

    const newDog = new Bio({
        id,
        name,
        species,
        breed,
        gender,
        birthday,
        age,
        description,
    });

    newDog.save().then(() => res.json("Dog added!"))
    .catch((err) => res.status(404).json("Error" + err)) 
});

router.get("/add", (req, res) => {
    Bio.find().then((Bio) => res.json(Bio).catch((err) => res.status(404).json({})
    ));
});



module.exports = router;