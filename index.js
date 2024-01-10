const express = require('express');

const app = express();

app.get("/", (req, res)=>{
     res.send("Server is running")
})
let PORT = 3000;
app.listen(PORT, ()=>{
     console.log("The server is running on Port 3000");
})