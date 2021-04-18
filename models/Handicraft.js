//import model and Schema 
const {model, Schema} = require("../db/connection")

//create Handicraft product Schema
const HandicraftSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: {type: Number, default: 0},
    left: {type: Number, default:0}
}, {timestamps: true})

const Handicraft = model("Handicraft", HandicraftSchema)

//export the Handicraft model
module.exports = Handicraft