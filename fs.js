let fs = require('fs');

//write file
// fs.writeFile('myText.txt', 'My code',function(){
//     console.log('Task completed successfully')
// })

// Append File
// fs.appendFile('myFile.txt', 'This is NodeJS \n',function(){
//     console.log('Data Appended successfully')
// })

//Read File
// fs.readFile('myFile.txt','utf-8',function(err, data){
//     if(err) throw err;
//     console.log(data);
// })

//Rename File
// fs.rename('myCode.txt','myCode1.txt',function(err){
//     if(err) throw err;
//     console.log('Rename File Success')
// });

//Delete File (Unlink)
fs.unlink('myCode1.txt',function(err){
    if(err) throw err;
    console.log('Unlink File Success')
});