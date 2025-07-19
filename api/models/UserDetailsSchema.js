const mongoose = require("mongoose");
const userdetailsSchema = new mongoose.Schema(
  {
     Name: {
      type: String,
      required: true,
    },
    DisplayName: {
      type: String,
      required: true,
      unique: true
    },
    email : {
      type: String,
      required: true,
    },
    Discord : {
      type: String,
      required: false,
    },
    contact : {
      type: Number,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    isVerified : {
      type : Boolean,
      default: false,
    },
  
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userdetailsSchema);
