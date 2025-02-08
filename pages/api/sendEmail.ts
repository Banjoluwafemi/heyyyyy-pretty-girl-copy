import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sendEmail = async (req, res) => {
  if (req.method === 'POST') {
    const { recipients, subject, text } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Setup email data with unicode symbols
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: subject || 'She Said Yes!',
      text: text || 'Will you be my girlfriend? She said yes!',
      html: `<strong>${text || 'Will you be my girlfriend? She said yes!'}</strong>`
    };

    // Send mail with defined transport object
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending emails' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default sendEmail;