const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  // host: 'your smtp server',
  port: 587,
  auth: {
    // user: 'Your email here ',
    // pass: 'your pass here',
  },
});

transporter.verify().then(console.log("Mail Connection verified")).catch(console.error);

module.exports ={
    transporter
}