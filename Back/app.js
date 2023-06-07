import {Configuration , OpenAIApi} from "openai"
import Express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from "body-parser";

const app = Express();
const key =  process.env.API_KEY;

app.use(bodyParser.json());
app.use(cors())


console.log(key)
const openai = new OpenAIApi(new Configuration({
  apiKey:"",
}))

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


app.post('/', async (req, res) => {
  try {
    const userRequest = req.body.data;
    console.log(userRequest)
    const finalRequest = userRequest + "I want the prompt to be separated into workouts numbered so that i can display them in paragraphs. And can you add a few relavant links in the end from youtube which match the prompts given by the user?";
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
