import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (recipients: string[]) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.femmybanjoh@gmail.com,
      pass: process.env.Femostic1@
    }
  });

  const mailOptions = {
    from: process.env.femmybanjoh@gmail.com,
    to: recipients,
    subject: 'She Said Yes!',
    text: 'Will you be my girlfriend? She said yes!',
    html: '<strong>Will you be my girlfriend? She said yes!</strong>'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

export default sendEmail;
