// sendMail.js

const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'muthukumaropen@gmail.com', // Your Gmail email address
    pass: 'cuxmrszfcwmsmkhi', // Your Gmail password or App Password
  },
});

// Function to send an email
function sendEmail() {
  const mailOptions = {
    from: 'muthukumaropen@gmail.com', // Sender email address
    to: 'poornaashavi@gmail.com', // Recipient email address
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent using Nodemailer.', // Plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}

sendEmail(); // Call the function to send the email
