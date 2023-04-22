import {Configuration , OpenAIApi} from "openai"
import Express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from "body-parser";

const app = Express();

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(cors())

const openai = new OpenAIApi(new Configuration({
  apiKey:process.env.API_KEY,
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


app.get('/',(req,res)=>{
  res.send({message:"hello"})
})


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
