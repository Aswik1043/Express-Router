const express = require('express');
const about = express()

about.get('/',(req,res)=>{
    res.send(`
    <h1>About us</h1>
    <p>This page has a unique feel, thanks to the deconstructed action figures representing the founders, 
    Leigh Whipday and Jonny Lander. </p>
    `)
})
module.exports=about