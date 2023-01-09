const express = require('express');
const app = express();
const PORT = 3000;
const quoteService = require('./Service/quote.service');
const quote = require('./Template/quoteTemplate');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/quote', (req,res)=>{
    console.log(req.body);   
    // quote.generateQuote(req.body);
    quoteService.generateQuote(req)
    res.send("sent");

})

app.listen(PORT,(err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server listening on port ${PORT}`);
} )