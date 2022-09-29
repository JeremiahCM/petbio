const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();
const Bio = require("../models/Bio");

//adding bio information for a dog
router.post("/add", (req, res) => {
    const id = "289347238794";
    const name = req.body.name;
    const species = req.body.species;
    const breed = req.body.breed;
    const gender = req.body.gender;
    const birthday = req.body.birthday;
    const age = req.body.age;
    const description = req.body.description;

    const newPet = new Bio({
        id,
        name,
        species,
        breed,
        gender,
        birthday,
        age,
        description,
    });

    newPet.save().then(() => res.json("Pet added!"))
    .catch((err) => res.status(404).json("Error" + err)) 
});

router.get("/view", (req, res) => {
    Bio.find().then((Bio) => res.json(Bio).catch((err) => res.status(404).json({})
    ));
});



module.exports = router;