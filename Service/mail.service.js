const transporter = require('../Config/mail.connection');


const sendQuotation = async () => {
  await transporter.sendMail({
    from: "FABODA",
    to: "mikechiloane@protonmail.com",
    subject: "PDF",
    text: "This is my stuff",
    attachments: [
      {
        filename: "quotation.pdf",
        path: "/Users/mikechiloane/Documents/TRAINING/QUOTE_GENERATOR/quotation.pdf",
        contentType: "application/pdf"
      }
    ]

  }).then(console.log("Attachment sent")).catch(console.log(error));

}

