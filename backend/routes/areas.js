const express = require('express');
const router = express.Router();
const Area = require('../models/Area'); // Adjust path if needed

// Save area
router.post('/', async (req, res) => {
  try {
    const { area, status } = req.body;
    const newArea = new Area({
      area,
      status,
      updatedAt: new Date(),
      history: [{ status, time: new Date() }]
    });
    await newArea.save();
    res.status(201).json(newArea);
  } catch (err) {
    res.status(500).json({ error: "Error saving area" });
  }
});

// Get all areas
router.get('/', async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(areas);
  } catch (err) {
    res.status(500).json({ error: "Error fetching areas" });
  }
});

module.exports = router;