const express = require("express");
const router = express.Router();
const Contact = require("../models/contactSchema.js");

router.post("/add", async (req, res) => {
  console.log(req.body);
  const { name, designation, company, industry, phoneNo, country } = req.body;
  try {
    const data = await Contact.create({
      name,
      designation,
      company,
      industry,
      phoneNo,
      country,
    });
    res.status(200).json({
      status: "Sucess",
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
});

router.get("/get", async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).json({
      status: "Sucess",
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
});

router.post("/delete:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Contact.deleteOne({ id: req.params.id });
    res.status(200).json({
      status: "Sucess",
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
});

module.exports = router;
