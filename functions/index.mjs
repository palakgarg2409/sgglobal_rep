import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import * as functions from 'firebase-functions';
import cors from 'cors';
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

const corsHandler = cors({ origin: true });

// Cloud Function to send email
export const sendEmail = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        try{
            var sender = req.body.sender;
            var to = "info@sgglobal.co.in";
            var name = req.body.naam;
            var msg = req.body.msg;
            var contact = req.body.contactt;

            // Email message options
            var mailOptions = {
                from : 'info@sgglobal.co.in',
                to : sender,
                subject : 'Thank You for Your Feedback',
                html : '<div><h3>Thank You ' + name + ', We are grateful to you for dedicating your time to send us an email. We will get back to you<br></h3></div> ---------------- <br><b><h3>Rajiv Kumar</h3></b> <br>Managing Director  <br>Mobile: +91 98127 00081 <br>Email: info@sgglobal.co.in  <br><br>   <br><br><h3 style="color:grey;">SG GLOBAL</h3>   <br>Address: SCO No. 200, <br>Transport Nagar, Sector - 25, <br>Panipat (PIN - 132103), <br>Haryana, India',
                // attachments: [
                //     {
                //       filename: 'footer_logomail.png', // Change this to the filename of your image
                //       path: 'docs/assets/footer_logomail.png', // Path to the image file
                //       cid: 'image1' // Unique identifier for the image
                //     }
                // ]
            }

            var mailOptions2 = {
                from : 'info@sgglobal.co.in',
                to : 'info@sgglobal.co.in',
                subject : 'Feedback for PuffNuts',
                html : '<div><h4>Feedback Added: </h4></div><div><h3>' + msg + '</h3></div>'+
                    '<br><div style="color: grey;"> Name: ' + name + '</div>' +
                    '<div style="color: grey;"> Email: ' + sender + '</div>' + 
                    '<div style="color: grey;"> Contact: ' + contact + '</div>'
            }

            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error occurred while sending email:', error);
                    return res.status(500).json({ success: false, error: 'Failed to send email.' });
                }
                console.log('Email sent:', info.response);
                return res.json({ success: true });
            });

            transporter.sendMail(mailOptions2, (error, info) => {
                if (error) {
                    console.error('Error occurred while sending email:', error);
                    return res.status(500).json({ success: false, error: 'Failed to send email.' });
                }
                console.log('Email sent:', info.response);
                return res.json({ success: true });
            });
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            return res.status(500).json({ success: false, error: 'An unexpected error occurred.' });
        }
    });
});

export const sendQuot = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        try{
            var sender = req.body.sender;
            var to = "info@sgglobal.co.in";
            var name = req.body.naam;
            var msg = req.body.msg;
            var contact = req.body.contactt;
            var product = req.body.product;
            var quantity = req.body.quantity;

            // Email message options
            var mailOptions = {
                from : 'info@sgglobal.co.in',
                to : sender,
                subject : 'Thank You for Your Feedback',
                html : '<div><h3>Thank You ' + name + ', We are grateful to you for dedicating your time to send us an email. We will get back to you<br></h3></div> ---------------- <br><b><h3>Rajiv Kumar</h3></b> <br>Managing Director  <br>Mobile: +91 98127 00081 <br>Email: info@sgglobal.co.in  <br><br>  <br><br><h3 style="color:grey;">SG GLOBAL</h3>   <br>Address: SCO No. 200, <br>Transport Nagar, Sector - 25, <br>Panipat (PIN - 132103), <br>Haryana, India',
                // attachments: [
                //     {
                //       filename: 'footer_logomail.png', // Change this to the filename of your image
                //       path: 'docs/assets/footer_logomail.png', // Path to the image file
                //       cid: 'image1' // Unique identifier for the image
                //     }
                // ]
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

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error occurred while sending email:', error);
                    return res.status(500).json({ success: false, error: 'Failed to send email.' });
                }
                console.log('Email sent:', info.response);
                return res.json({ success: true });
            });

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error occurred while sending email:', error);
                    return res.status(500).json({ success: false, error: 'Failed to send email.' });
                }
                console.log('Email sent:', info.response);
                return res.json({ success: true });
            });
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            return res.status(500).json({ success: false, error: 'An unexpected error occurred.' });
        }
    });
});
