// Comment: Make sure to save npm packages on pacakge.json for development. related commands: npm init, npm i 

const express = require('express');
const app = express();
// console.dir(app)
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join)


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