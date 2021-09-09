const mongoose = require("mongoose");
const accountdetailsSchema = new mongoose.Schema(
  {
    Userid :{
      type: mongoose.Schema.Types.ObjectId,
    },
    Radianite :{
      type: Number,
      required: true,
    },
    selected : {
      type : Array,
      required: true,
    },
    ValorantP : {
      type : Number,
      default: null,
    },
    Rank :{
      type : String,
      required : true,
    },
    Price :{
      type : Number,
      required : true,
    },
    DisplayName: {
      type: String,
      required: true,
    },
    isSold : {
      type : Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("Account", accountdetailsSchema);
