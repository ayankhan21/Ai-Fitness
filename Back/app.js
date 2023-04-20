const express = require('express')
const app = express()
const mongoose = require("mongoose");
const Data = require('./model/data')


const dbURI =
  "mongodb+srv://ayankhan21:Dellinspiron7588@cluster0.sfa1ovo.mongodb.net/interview-prep?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // for connection of DB; second arg not compulsory(only to avoid a warning)
  .then((result) => {
    // console.log(result)
  })
  .catch((err) => {
    console.log(err);
  });






app.listen(8000,()=>{
    console.log('server is running on 3000')
})