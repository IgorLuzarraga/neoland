const nodemailer = require("nodemailer");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config()

const PORT = process.env.PORT

const server = express()

// We get a express router, that we'll use to check Nodemailer
const router = express.Router()

//Petición por param
router.get("/sendNewMail", (req, res, next) => {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
  
    console.log(email)
    
    // Tranport object responsable to send an email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

      //Configurar opciones
  const mailOptions = {
    from: email,
    to: "iluzarraga@gmail.com",
    subject: "Confirmation",
    text: "Everything is going well! 👌🏽",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return next(error)
    } else {
      return res.status(200).json("Email sent: " + info.response)
    }
  });
})


server.use("/", router)


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`)
});