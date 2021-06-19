// Comment: Make sure to save npm packages on pacakge.json for development. related commands: npm init, npm i 

const express = require('express');
const app = express();
// Comment: if you are curious about JSobject in side of Express - you can do console.dir(app) here.
const path = require('path');

app.set('view engine', 'ejs');
// Comment: __dirname takes the Current directory name then we will joining the path with '/views'
app.set('views', path.join(__dirname,'views'))


// Comment: check if the port is running at the very first (good habit)
app.get('/', (req,res)=>{
    res.send('First Crud application')
})

// Comment: use() function
// app.use(()=>{
//     console.log("Every time we request on the port, whether that is get/post/delete, this command will be executed on our terminal")
// })

// Comment: listen() function will create a port - next step will be sending a response to its port i.e.get method
app.listen(3000, ()=>{
    console.log('Serving on port 3000')
})