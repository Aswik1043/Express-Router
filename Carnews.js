const express = require('express');
const Carnews = express()

Carnews.get('/',(req,res)=>{
    res.send("CARS NEWS")
})

const services = [
    {
        id:1,
        name:'MARUTI'
    },
    {
        id:2,
        name:'HONDA'
    },
    {
        id:3,
        name:'HYUNDAI'
    },
    {
        id:4,
        name:'BMW'
    },
    {
        id:5,
        name:'BENZ'
    },
    {
        id:6,
        name:'ASTRO MARTIN'
    }
]

Carnews.get('/:no',(req,res)=>{
    const serId = Number(req.params.no)
    const findService = services.find((service)=>{
        service.id=serId
        console.log(findService)
    })
})
module.exports = Carnews