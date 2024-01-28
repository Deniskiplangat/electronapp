const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        require: true
    },
    password:{
        type: String,
        require:true
    },
})

//below i have acreated a user model
const userModel = new  mongoose.model('user',userSchema)
//let us now export the user model
module.exports = userModel


