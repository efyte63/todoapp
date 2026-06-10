import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username : {
        type : String ,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required: true,
        unique : true
    },

    email : { 
        type: String,
        required : true,
        unique: true

    },
  Image: {
  type: String,
  trim: true 
}

    
})

const usermodel = mongoose.model("users" , userSchema);

export default usermodel;