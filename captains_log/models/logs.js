//load mongoose
const mongoose = require('mongoose')

//shorten the 
const Schema = mongoose.Schema

//create our Schema
const logSchema = new Schema({
        title: {type:String, required: true},
        entry: {type:String, required: true},
        shipIsBroken: Boolean     
})

//create a Model from our Schema
const logs = mongoose.model('logs', logSchema)

//export our Model
module.exports = logs;