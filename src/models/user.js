const mongoose= require("mongoose")

const {Schema} = mongoose

const userSchema= new Schema({
    firstName:{
        type: String 
    },
    lastName:{
        type: String 
    },
    emailId:{
        type: String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }

});

// const userModel=mongoose.model("User",userSchema); 

// module.exports= userModel;

module.exports= mongoose.model("User",userSchema)