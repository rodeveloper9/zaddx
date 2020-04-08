const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "rohit@technogramsolutions.com",
        pass: "."
    }
});

/*------------------Routing  ------------------------*/
app.use(express.static('public'))    //

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/:pagename', (req, res) => {
    const { pagename = "index" } = req.params;
    const filepathName = path.join(__dirname, `./${pagename}.html`)
    res.sendFile(filepathName);
});

app.get('/send', function(req, res) {
    var name = req.query.name;
    var email = req.query.email;
    var skype = req.query.skype;
    var number = req.query.number;
    var comment = req.query.comment;
    var emailMessage = ` Name:  ${name} \n Email ID: ${email}.\n Skype : ${skype}\n Contact Number: ${number}\n Comment Message: ${comment}\n `;
    var mailOptions = {
        from: 'noreply@technogramsolutions.com',
        to: 'rohitdeveloper9@gmail.com',
        subject: 'Enquiry Form Zaddx',
        text: emailMessage
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

app.listen(2001, function() {
    console.log("Express Started on Port 2001");
});