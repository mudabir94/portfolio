const mongoose = require('mongoose');


const employeesSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String, 
      require: true, 
      unique: true
    }
})


const employees=mongoose.model("employees",employeesSchema)
module.exports = employees