import {Configuration , OpenAIApi} from "openai"
import Express from 'express';
import cors from 'cors'
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from "body-parser";

const app = Express();
const key =  process.env.API_KEY;
const apiUrl = process.env.API_URL;

// console.log(key)
// Parse JSON request bodies
app.use(bodyParser.json());
app.use(cors())



const openai = new OpenAIApi(new Configuration({
  apiKey:"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",
}))




// const prompt = 'A ship sailing through a river in deep space'

// const result = await openai.createImage({
//   prompt,
//   n:1,
//   size:"1024x1024",
// })

// const url = result.data.data[0].url;
// console.log(url)

// async function generateImage(prompt) {
//   const response = await axios.post(apiUrl, {
//     model: 'image-alpha-001',
//     api_key: process.env.API_KEY,
//     prompt: prompt,
//     size: '1024x1024',
//     response_format: 'url',
//     num_images: 1
//   });
  
//   return response.data.data[0].url;
// }

// generateImage('Car with a hat')


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


app.get('/',(req,res)=>{
  res.send({message:"hello"})
})


app.post('/', async (req, res) => {
  try {
    const userRequest = req.body.data;
    console.log(userRequest)
    const finalRequest = userRequest + "I want the prompt to be separated into workouts numbered so that i can display them in paragraphs";
    const result = await chatGpt(finalRequest);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(8000,()=>{
    console.log('server is running on 8000')
})
