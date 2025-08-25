const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
  area: [[Number]], // Array of [lat, lng]
  status: String,
  updatedAt: Date,
  history: [
    {
      status: String,
      time: Date
    }
  ]
});

module.exports = mongoose.model('Area', AreaSchema);