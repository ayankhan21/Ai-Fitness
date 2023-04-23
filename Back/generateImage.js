import { Configuration , OpenAIApi } from "openai";
import {writeFileSync} from 'fs';
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

// const api_key = process.env.API_KEY;
// console.log(api_key)

const configuration = new Configuration({
    apiKey:process.env.API_KEY,
})

const openai = new OpenAIApi(configuration);
// const prompt = 'A yellow dress on a maniquin with gold and silver patterns on it ';
const prompt = 'A BLACK BODYCON DRESS'

const result = await openai.createImage({
    prompt,
    n:1,
    size:"1024x1024"
})

const url = result.data.data[0].url

const  imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer())

const imgDir = './img';
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir);
}
let now = new Date;
writeFileSync(`${imgDir}/${now.getMinutes()}.png`, buffer);
