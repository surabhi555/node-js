const fsPromises=require('fs').promises;
const path=require('path')

// fs.readFile('./files/starter.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// }) ==><Buffer 68 69 69 21 6d 79 20 6e 61 6d 65 20 69 73 20 73 75 72 61 62 68 69>


// fs.readFile('./files/starter.txt',(err,data)=>{
//         if(err) throw err;
//         console.log(data.toString())})==>hii!my name is surabhi


// fs.readFile('./files/starter.txt','utf-8',(err,data)=>{
//     if(err)throw err
//     console.log(data)
// })===>hii!my name is surabhi


// fs.readFile(path.join(__dirname,'files','starter.txt'),(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })

// fs.writeFile( path.join(__dirname,'files','reply.txt'),'nice to meet you', (err) =>{
//     if(err) throw err;
//     console.log('file created');
// })

// fs.appendFile(path.join(__dirname,'files','test.txt'),'testing append',(err)=>{
//     if(err) throw err;
//     console.log("append completed")
// })


// fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err)=>{
//     if(err) throw err;
//     console.log('file renamed')
// })

//====async await

const fileOps = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf-8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)

        await fsPromises.appendFile(path.join(__dirname,'files','test.txt'),'\n\nnice to meet you')

        await fsPromises.rename(path.join(__dirname,'files','test.txt'),path.join(__dirname,'files','newTest.txt'))
         await fsPromises.unlink(path.join(__dirname,'files','starter.txt'))
    }catch(err){
        console.error(err)
    }
}
fileOps()
