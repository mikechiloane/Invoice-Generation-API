const { parse } = require('date-and-time');
const Quote = require('../Model/quote.model');
const quoteGenerator = require('../Template/quoteTemplate');

const createQuote = async (req) => {
    const client = req.body.client;
    const description = req.body.description;
    const amount = req.body.amount;
    const total = req.body.total;

    const newQuote = await Quote.create({
        client, description, amount, total
    }
    );

    console.log(newQuote.total)
    return newQuote;
}


const generateQuote = async (req) => {
    const quote = await createQuote(req);
    // const myTotal =await parseFloat(quote.total);
    // console.log(`The parsed int is ${myTotal}`);
    quoteGenerator.generateQuote(quote);
}




module.exports = {
    createQuote,
    generateQuote
}