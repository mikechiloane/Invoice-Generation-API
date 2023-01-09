const { where } = require('sequelize');
const Quote = require('../../Model/quote.model');

const getTotals = async () => {

    var total = 0;
    const quotes = await Quote.findAll(
        {
            attributes: ['total'],
        }
    );

    quotes.forEach(quotation => {
         total +=  parseFloat( quotation.total);
    });

    console.log(`Total for all quotes: ${total}`);
    return total;
}

const getAllSales = async ()=>{
    const quotes = await Quote.findAll(
        {
            attributes: ['total'],
        }
    );

    return quotes.length;
}



module.exports={
    getTotals,
    getAllSales
}