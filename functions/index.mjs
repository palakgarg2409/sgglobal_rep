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
            subject : 'Thank you for contacting us!',
            html : '<div>Thank you ' + name + ',<br><br> We appreciate you taking the time to reach out to us. We\'ll be in touch shortly.<br><br></h3></div> ---------------- <br><br>Best Regards,<b><h3>SG Global Team</b>  <br>Mobile: +91 98127 00081 <br>Email: info@sgglobal.co.in  <br><img src="https://drive.google.com/uc?export=view&id=1cOAgWFNHkMgWS9x1tpvOtzV9NJI1sDb3" style="width:150px; height:auto;" /><br>  <h3 style="color:grey;">SG GLOBAL</h3> Address: SCO No. 200, <br>Transport Nagar, Sector-25, <br>Panipat (PIN-132103), <br>Haryana, India',
        }

        var mailOptions2 = {
            from : 'info@sgglobal.co.in',
            to : 'info@sgglobal.co.in',
            subject : 'Inquiry from '+ name,
            html : '<div><h4>Message: </h4></div><div>' + msg + '</div>'+
                '<br><br>Contacted by:' +
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
            html : '<div>Dear ' + name + ',<br><br> Thank you for your quotation query. Our team is currently reviewing the details you provided, and we will respond to your inquiry as soon as possible.<br><br>We look forward to the possibility of working with you.<br><br></div> ---------------- <br>Best Regards,<b><h3>SG Global Team</h3></b>  <br>Mobile: +91 98127 00081 <br>Email: info@sgglobal.co.in  <br><img src="https://drive.google.com/uc?export=view&id=1cOAgWFNHkMgWS9x1tpvOtzV9NJI1sDb3" style="width:150px; height:auto;" /><br>  <h3 style="color:grey;">SG GLOBAL</h3> Address: SCO No. 200, <br>Transport Nagar, Sector-25, <br>Panipat (PIN-132103), <br>Haryana, India',
        }

        var mailOptions2 = {
            from : 'info@sgglobal.co.in',
            to : 'info@sgglobal.co.in',
            subject : 'Quotation query for ' + product,
            html : '<div><h4>Quotation Requested for ' + product + '</h4></div>'+
                'Quantity: ' + quantity  +
                '<br><br>Message: <br>' + msg +
                '<br><br>Query from:' + 
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
