const express = require ("express");
require("dotenv").config()
const app = express();

const MyPort= process.env.PORT



app.listen(MyPort, ()=> {
    console.log(`app is listening to the port ${MyPort}`)
})