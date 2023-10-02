const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    }
},{
    // this will tell us when the data got updated and when the schema was created 
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;