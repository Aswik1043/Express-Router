const express = require('express');
const app = express()

const service = require('./services')
const About = require('./About');
const book = require('./Pages');
const user = require('./user')

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.use('/services',service)
app.use('/about',About)
app.use('/Pages',Pages)
app.use('/user',user)

app.listen(3000)