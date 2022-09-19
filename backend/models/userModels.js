const { Schema , model } = require('../connection');

const chatschema = new Schema({
    username:String,
    email:String,
    password:String
})

module.exports = model("users", chatschema);