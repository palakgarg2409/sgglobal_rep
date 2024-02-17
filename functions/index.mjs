import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import * as functions from 'firebase-functions';
import nodemailer from 'nodemailer';

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // GoDaddy SMTP server
    port: 465, // SMTP port (secure)
    secure: true, // true for secure connection (SSL/TLS)
    auth: {
      user: 'info@sgglobal.co.in',
      pass: 'Rk21@Pnp1981',
    },
});

export const sendEmail = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600'); // 1 hour

    if (req.method === 'OPTIONS') {
        return res.status(204).send('');
    }else{
        console.log(req.body);
        var boddy = req.body;
        console.log(boddy.sender);
        var sender = boddy.sender;
        var to = "info@sgglobal.co.in";
        console.log("The email of user: " + sender + ". The datatype of user email: " + typeof(sender));
        var name = boddy.naam;
        var msg = boddy.msg;
        var contact = boddy.contactt;

        var mailOptions = {
            from : 'info@sgglobal.co.in',
            to : sender,
            subject : 'Thank You for contacting us',
            html : '<div><h3>Thank You ' + name + ', We are grateful to you for dedicating your time to send us an email. We will get back to you<br></h3></div> ---------------- <b><h3>Rajiv Kumar</h3></b>Managing Director  <br>Mobile: +91 98127 00081 <br>Email: info@sgglobal.co.in  <br><img src="https://drive.google.com/uc?export=view&id=1cOAgWFNHkMgWS9x1tpvOtzV9NJI1sDb3" style="width:150px; height:auto;" /><br>  <h3 style="color:grey;">SG GLOBAL</h3> Address: SCO No. 200, <br>Transport Nagar, Sector - 25, <br>Panipat (PIN - 132103), <br>Haryana, India',
        }

        var mailOptions2 = {
            from : 'info@sgglobal.co.in',
            to : 'info@sgglobal.co.in',
            subject : 'Feedback',
            html : '<div><h4>Feedback Added: </h4></div><div><h3>' + msg + '</h3></div>'+
                '<br><div style="color: grey;"> Name: ' + name + '</div>' +
                '<div style="color: grey;"> Email: ' + sender + '</div>' + 
                '<div style="color: grey;"> Contact: ' + contact + '</div>'
        }

        var errors = 0;
        var responses = [];

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                errors += 1;
                responses.push("Sending email to User failed!! Error msg: " + error);
                console.log(error);
            }else{
                responses.push("Email Sent to the User!! Info response: " + info.response);
                console.log('Email Sent: ' + info.response)
            }
        })

        transporter.sendMail(mailOptions2, function(error, info){
            if(error){
                errors += 1;
                responses.append("Sending email to Admin failed!! Error msg: " + error);
                console.log(error);
            }else{
                responses.append("Email Sent to the Admin!! Info response: " + info.response);
                console.log('Email Sent: ' + info.response)
            }
        })

        if(errors == 0){
            res.status(200).json({ status: 200, EmailSentToUser: responses[0], EmailSentToAdmin: responses[1] });
        }else{
            res.status(500).json({ status: 500, EmailSentToUser: responses[0], EmailSentToAdmin: responses[1] });
        }
    }
});

export const sendQuot = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600'); // 1 hour

    if (req.method === 'OPTIONS') {
        return res.status(204).send('');
    }else{
        console.log(req.body);
        var sender = req.body.sender;
        var to = "info@sgglobal.co.in";
        var name = req.body.naam;
        var msg = req.body.msg;
        var contact = req.body.contactt;
        var product = req.body.product;
        var quantity = req.body.quantity;

        var mailOptions = {
            from : 'info@sgglobal.co.in',
            to : sender,
            subject : 'Thank you for your enquiry!',
            html : '<div><h3>Thank You ' + name + ', We are grateful to you for dedicating your time to send us an email. We will get back to you<br></h3></div> ---------------- <b><h3>Rajiv Kumar</h3></b>Managing Director  <br>Mobile: +91 98127 00081 <br>Email: info@sgglobal.co.in  <br><img src="https://drive.google.com/uc?export=view&id=1cOAgWFNHkMgWS9x1tpvOtzV9NJI1sDb3" style="width:150px; height:auto;" /><br>  <h3 style="color:grey;">SG GLOBAL</h3> Address: SCO No. 200, <br>Transport Nagar, Sector - 25, <br>Panipat (PIN - 132103), <br>Haryana, India',

            
        }

        var mailOptions2 = {
            from : 'info@sgglobal.co.in',
            to : 'info@sgglobal.co.in',
            subject : 'Quotation for ' + product,
            html : '<div><h4>Quotation Requested for ' + product + '</h4></div>'+
                '<br><h3>Quantity: ' + quantity + '</h3>' +
                '<br>Message Added: <br>' + msg +
                '<br><br>Asked by:' + 
                '<br><div style="color: grey;"> Name: ' + name + '</div>' +
                '<div style="color: grey;"> Email: ' + sender + '</div>' + 
                '<div style="color: grey;"> Contact: ' + contact + '</div>'
        }

        var errors = 0;
        var responses = [];

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                errors += 1;
                responses.push("Sending email to User failed!! Error msg: " + error);
                console.log(error);
            }else{
                responses.push("Email Sent to the User!! Info response: " + info.response);
                console.log('Email Sent: ' + info.response)
            }
        })

        transporter.sendMail(mailOptions2, function(error, info){
            if(error){
                errors += 1;
                responses.append("Sending email to Admin failed!! Error msg: " + error);
                console.log(error);
            }else{
                responses.append("Email Sent to the Admin!! Info response: " + info.response);
                console.log('Email Sent: ' + info.response)
            }
        })

        if(errors == 0){
            res.status(200).json({ status: 200, EmailSentToUser: responses[0], EmailSentToAdmin: responses[1] });
        }else{
            res.status(500).json({ status: 500, EmailSentToUser: responses[0], EmailSentToAdmin: responses[1] });
        }
    }
});
