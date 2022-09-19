const { Schema , model } = require('../connection');

const chatschema = new Schema({
    roomname:String,
    createdAt : Date
})

module.exports=model('rooms', chatschema);