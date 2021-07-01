const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    city:{
        type: String,
    },
    country:{
        type:String,
    }
})

module.exports = mongoose.model("location", locationSchema)