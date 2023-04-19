const fs = require('fs')

// fs.readFile('./textFile.txt',(err,data)=>{
//     if(err){
//         throw new Error("Something went wrong")
//     }else{
//         console.log(data)
//     }
// })

// const allFiles = fs.readdirSync('./'); // SYNC operation ( they dont have callbacks)
// console.log(allFiles)

// fs.readdir('./',(err,data)=>{
//     if(err) return console.log("Something wrong")
//     else{
//         console.log(data, "Inner clg")
//     }
// })

// const contentSync = fs.readFileSync('./', 'utf-8');
// console.log(contentSync);

fs.readFile('./textfiles/words.txt','utf-8',(err,data)=>{
    if(err) return false;
    console.log(data)
})

// fs.writeFile('./textfiles/words.txt',"Hello mate",(err,fd)=>{
//     if(err) return err;
//     console.log(fd)
// })
// fs.access('./textFile.txt',(err,data)=>{
//     if(err) return false;
//     console.log(data)
// })
