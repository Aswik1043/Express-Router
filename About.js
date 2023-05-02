const express = require('express');
const about = express()

about.get('/',(req,res)=>{
    res.send(`
    <h1>About us</h1>
    <p>This page all about news and newsfeed </p>
    `)
})
module.exports=about