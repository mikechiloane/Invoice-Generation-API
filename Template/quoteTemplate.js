const pdfkit = require('pdfkit');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const { scale } = require('pdfkit');
const Now = new Date();
const date = require('date-and-time');

const quote = new PDFDocument({ size: [595.28, 595.28] });

const generateQuote =  (info)=>{
quote.pipe(fs.createWriteStream('quotation.pdf'));
quote
    .font('Helvetica-Bold')
    .image('./Assets/logo.png', 253, 64, { fit: [88, 88] })
    .moveDown(7);
quote
    .fontSize(20)
    .text(`QUOTATION #${info.quote_id}`, { align: 'center' })
    .moveDown(0.5);
    
quote
    .fontSize(15)
    .text(`Client: ${info.client}`)
    .text(`Date: ${date.format(Now, 'ddd, MMM DD YYYY')}`);

quote
    .fontSize(20)
    .fill('red')
    .text("DUE IN 2 DAYS", 352,220);

quote
    .fontSize(15)
    .fill('black')
    .moveTo(72, 250)
    .lineTo(quote.page.width - 72, 250)
    .stroke()
    .moveDown(1);

quote
    .font("Helvetica")
    .text(`${info.description}`, 75, 260)
    .font("Helvetica-Bold")
    .text(`R${info.amount}`, 450, 260)
    .text(`Total: R${info.total}`, 420, 370)

quote
    .moveTo(72, 400)
    .lineTo(quote.page.width - 72, 400)
    .stroke()
    .moveDown(1);

quote 
    .fontSize(14)
    .text("BANKING DETAILS",72,420)
    .fontSize(12)
    .moveDown(0.7)
    .fill('red')   
    .text("BANK\nACCOUNT NO\nACCOUNT NAME\nACCOUNT TYPE" ,72,450)
    .text(": CAPITEC BANK\n: 1561889316\n: MIKE CHILOANE\n: SAVINGS",200,450)
    .image('./Assets/bank.jpg',350,464,{scale:0.155})

quote.end();

}

// generateQuote({quote_number:2})

module.exports = {
    generateQuote
}