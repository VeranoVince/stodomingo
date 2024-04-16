const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});*/
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  // Access form data
  const { selectedOption, fullName, email, phoneNumber, details, selectedJob } =
    req.body;

  // Access file data
  const fileData = req.file;

  // Send email with form data and attached file
  sendEmail({
    selectedOption,
    fullName,
    email,
    phoneNumber,
    details,
    selectedJob,
    fileData,
  })
    .then(() => {
      res.send({ message: "Email Sent Successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "An error occurred" });
    });
});

function sendEmail({
  selectedOption,
  fullName,
  email,
  phoneNumber,
  details,
  selectedJob,
  fileData,
}) {
  if (selectedOption === "Career") {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vinceverano15@gmail.com",
          pass: "gonq uxmz gyoe sjti",
        },
      });

      const mail_configs = {
        from: email,
        to: "vinceverano15@gmail.com",
        subject: selectedOption,
        html: `
          <p>Full Name: ${fullName}</p>
          <p>Inquiry: ${selectedOption}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Job Selected: ${selectedJob}</p>
        `,
        attachments: [
          {
            filename: fileData.originalname,
            content: fileData.buffer,
          },
        ],
      };

      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(error);
          return reject({ message: "An error occurred" });
        }

        return resolve({ message: "Email Sent Successfully" });
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vinceverano15@gmail.com",
          pass: "gonq uxmz gyoe sjti",
        },
      });

      const mail_configs = {
        from: email,
        to: "vinceverano15@gmail.com",
        subject: selectedOption,
        html: `
        <p>Full Name: ${fullName}</p>
        <p>Inquiry: ${selectedOption}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Details: ${details}</p>
      `,
      };

      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(error);
          return reject({ message: "An error occured" });
        }

        return resolve({ message: "Email Sent Successfully" });
      });
    });
  }
}

app.get("/", upload.single("file"), (req, res) => {
  sendEmail(req.query)
    .then((response) => response.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(PORT, () => {
  console.log(`nodemailer is listening at ${PORT}`);
});
