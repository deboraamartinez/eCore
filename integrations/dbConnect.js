const mongoose = require('mongoose')



mongoose.connect("mongodb+srv://deboraa:1234@cluster0.tiu8hzg.mongodb.net/?retryWrites=true&w=majority")


let db = mongoose.connection
module.exports = db

