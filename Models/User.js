const mongoose = require('mongoose');

const authSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },
    gender:{
        type:String,
        default:"Male"
    },

    image : {
        type : String,
        default : "https://bit.ly/broken-link"
    },
    role:{
        type:String,
        default:"consumers"
    }

}, {
    versionKey : false,
    timestamps : true
});

const UserModel = mongoose.model("user", authSchema);
module.exports = {
  UserModel
}