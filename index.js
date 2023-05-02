const express = require('express');
const app = express()

const Carnews = require('./Carnews')
const About = require('./About');
const pages = require('./Pages');
const user = require('./user')

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.use('/cars',Carnews)
app.use('/about',About)
app.use('/Pages',pages)
app.use('/user',user)

app.listen(3000)