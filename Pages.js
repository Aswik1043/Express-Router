const express = require('express');
const book = express()

book.get('/',(req,res)=>{
    res.send(`
    <h2>Pages</h2>
    <dl>
        <dt>Maths book</dt>
        <dd>The study of mathematics as a "demonstrative discipline" began in the 6th century BC with the Pythagoreans, 
        who coined the term "mathematics" from the ancient Greek subject of instruction </dd>
    </dl>
    `)
})
module.exports=book