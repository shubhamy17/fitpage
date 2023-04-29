const mongoose = require('mongoose');

// Define schema for criterion
const criterionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String, required: true },
  variable: { type: Object }
});

// Define schema for stock schema
const stockSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  tag: { type: String, required: true },
  color: { type: String, required: true },
  criteria: [criterionSchema]
});

// Define model for rule
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
