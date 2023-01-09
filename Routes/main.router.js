const express = require('express');
const router = express.Router();
const quote = require('../generate');

router.post('/quote',(req,res)=>{

    quote.generateQuote(res.body);

})

module.exports = router;