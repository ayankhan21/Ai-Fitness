import {Configuration , OpenAIApi} from "openai"
import Express from 'express';
import cors from 'cors'
// const bodyParser = require('body-parser');
import bodyParser from "body-parser";

const app = Express();

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(cors())

const openai = new OpenAIApi(new Configuration({
  apiKey:'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',
}))


// function chatGpt(mes){
//   let result;
//   openai.createChatCompletion({
//     model:"gpt-3.5-turbo",
//     messages:[{role:"user", content:mes}]
//   }).then(res=>{
//     result = res.data.choices[0].message.content
//     console.log(res.data.choices[0].message.content)
//   }).finally(()=>{
//     console.log("byee")
//   })
//   return result;
// }

function chatGpt(userRequest) {
  let result;
  return new Promise((resolve, reject) => {
    openai.createChatCompletion({
          model:"gpt-3.5-turbo",
          messages:[{role:"user", content:userRequest}]
        }).then(res=>{
          result = res.data.choices[0].message.content
          console.log(result)
          resolve(result);
        }).finally(()=>{
          console.log("byee")
        })
  });
}

// chatGpt('Design a course on the topic React , it should contain atleast 5 sections such as intro , Principles , a few more important sections and a 10 question MCQ questionaire')


app.get('/',(req,res)=>{
  res.send({message:"hello"})
})


// app.post('/',(req,res)=>{
//     // console.log(req.body.data)
//     let userRequest = req.body.data;
//     const result = chatGpt(userRequest)
//     console.log(typeof(result))
//     res.send(result)
// })

app.post('/', async (req, res) => {
  try {
    const userRequest = req.body.data;
    const result = await chatGpt(userRequest);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});




app.listen(8000,()=>{
    console.log('server is running on 8000')
})

// const mongoose = require("mongoose");
// const Data = require('./model/data')


// const dbURI =
//   "mongodb+srv://ayankhan21:Dellinspiron7588@cluster0.sfa1ovo.mongodb.net/interview-prep?retryWrites=true&w=majority";
// mongoose.set("strictQuery", true);
// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // for connection of DB; second arg not compulsory(only to avoid a warning)
//   .then((result) => {
//     // console.log(result)
//   })
//   .catch((err) => {
//     console.log(err);
//   });