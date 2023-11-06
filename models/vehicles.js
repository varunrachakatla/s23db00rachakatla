const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    vehicle_type :String,
    color : String,
    price : Number
})
module.exports = mongoose.model("Vehicles", vehicleSchema)