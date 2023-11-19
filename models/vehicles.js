const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    vehicle_type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v);
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    color: String,
    price: Number
})
module.exports = mongoose.model("Vehicles", vehicleSchema)