const express = require('express');
const newsfeed = express()

newsfeed.get('/',(req,res)=>{
    res.send(`
    <h1>News feed</h1>
    <p>This page has a contains fresh news feed content</p>
    `)
})
module.exports=newsfeed