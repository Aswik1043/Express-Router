var express = require('express') 
var user = express.Router() 
user.get('/',(request,response)=>{ 
    response.send("hello") 
}) 

user.route('/:id').get((request,response)=>{ 
    response.send(`This is requested url id:  ${request.params.id}`) 
})

user.param('id',(request,response,next,id)=>{ 
    console.log(id) 
    next()
})
module.exports=user;