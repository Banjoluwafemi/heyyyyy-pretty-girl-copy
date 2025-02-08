import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sendEmail = async (recipients: string[]) => {
  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service here
    auth: {
      user: process.env.EMAIL_USER, // Your email address from environment variable
      pass: process.env.EMAIL_PASS // Your email password from environment variable
    }
  });

  // Setup email data with unicode symbols
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: recipients, // List of recipients
    subject: 'She Said Yes!', // Subject line
    text: 'Will you be my girlfriend? She said yes!', // Plain text body
    html: '<strong>Will you be my girlfriend? She said yes!</strong>' // HTML body
  };

  // Send mail with defined transport object
  try {
    await transporter.sendMail(mailOptions);
    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

export default sendEmail;
