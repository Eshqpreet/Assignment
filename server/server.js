const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

var myemail = "yourgmail@gmail.com";//Fill this
var mypassword = "password";//Fill this

function sendEmail({ recipient_email, name, email, message }) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: myemail,
                pass: mypassword,
            },
        });

        const mail_configs = {
            from: myemail,
            to: recipient_email,
            subject: "Contact Form Submission",
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occurred` });
            }
            return resolve({ message: "Email sent successfully" });
        });
    });
}

app.post("/send_contact_email", (req, res) => {
    const { name, email, message } = req.body;

    sendEmail({
        recipient_email: "recipient@gmail.com", // Replace with the recipient's email address
        name,
        email,
        message,
    })
        .then((response) => {
            console.log("Email sent successfully:", response.message);
            res.send(response.message);
        })
        .catch((error) => {
            console.error("Error sending email:", error.message);
            res.status(500).send(error.message);
        });
});


app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
