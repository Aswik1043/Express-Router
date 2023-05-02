const express = require('express');
const pages = express()

pages.get('/',(req,res)=>{
    res.send(`
    <h2>NEWS</h2>
    <dl>
        <li>Maruti suzuki</li>
        <dd>All Maruti Suzuki hatchbacks, sedans, MPVs, SUVs and commercial vehicles are now compliant with the new BS6 Phase-II Real Driving Emissions (RDE) regulations, alongside being compatible with E20 fuel.
        </dd>
    </dl>
    `)
})
module.exports=pages