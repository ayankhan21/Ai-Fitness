const fs = require('fs')


// fs.mkdir('textfiles',(err)=>{
//     if(err) console.log(err)
// })

// fs.readFile('./textfiles/words.txt','utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const readStream = fs.createReadStream('../textfiles/words.txt','utf-8')

// console.log(readStream)
// readStream.on('data',(err,chunck)=>{
//     console.log(chunck)
// })