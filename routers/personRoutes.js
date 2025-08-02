const express = require("express");

const router = express.Router();
const Person = require("../models/Person.js");


router.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data Saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error was found : ", error);
  }
});

router.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "invalid work type" });
    }
  } catch (error) {
    console.log("Error occured :", error);
  }
});

router.post("/menu", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new Menu(data);

    const response = await newMenu.save();

    res.status(200).json(response);
  } catch (error) {
    console.log("Error occured :", error);
  }
});

router.put("person/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpadate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }

    console.log("data fetched");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});


module.exports = router;
