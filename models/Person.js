const mongoose = require("mongoose");

const { v4: uuidv4 } = require('uuid')

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, requirede: true },
})
const person = mongoose.model('person', personSchema)
module.exports = person

