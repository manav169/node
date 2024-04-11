const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "3251manavmattu@gmail.com",
    pass: "ahco ucns rljk tsqi",
  },
});

const mailOptions = {
  from: "3251manavmattu@gmail.com",
  to: "sharmaamit8183@gmail.com",
  subject: "bhosdike",
  text: "This is a test email sent using Nodemailer.",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});