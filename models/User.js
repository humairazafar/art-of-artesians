//import Schema and model

const {Schema, model} = require("../db/connection")

//creating the User Schema

const UserSchema = new Schema({
    username:{type: String, unique: true, required: true},
    password: {type: String, required: true},
},{timestamps: true})

//the User model
const User = model("User", UserSchema)

//export the User model
module.exports = User