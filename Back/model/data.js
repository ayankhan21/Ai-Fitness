const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dummySchema = new Schema({ // schema describing
    title: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    }
} ,{timestamps:true}) //2nd arg - options arguement

const Data = mongoose.model('dummyData',dummySchema)
module.exports = Data;
