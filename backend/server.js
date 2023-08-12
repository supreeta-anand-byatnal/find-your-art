const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const fs = require("fs");

const app = express();
const port = 3001; 


const upload = multer({ dest: "uploads/" });


app.post("/send-verification-email", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    
    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: "supreeta.byatnal@gmail.com",
        pass: "password",
      },
    });

    
    const recipientEmail = "supreeta.byatnal@gmail.com";


    const mailOptions = {
      from: "supreeta.byatnal@gmail.com",
      to: recipientEmail,
      subject: "Verification Document",
      text: "Please find the attached verification document.",
      attachments: [
        {
          filename: file.originalname,
          content: fs.createReadStream(file.path),
        },
      ],
    };

    await transporter.sendMail(mailOptions);

   
    fs.unlinkSync(file.path);

    res.status(200).json({ message: "Verification email sent successfully!" });
    return true;
  } catch (error) {
    console.error("Error sending verification email:", error);
    res.status(500).json({ error: "Failed to send verification email." });
    return false;
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
