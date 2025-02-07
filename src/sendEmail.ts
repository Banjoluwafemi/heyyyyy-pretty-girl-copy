import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (recipients: string[]) => {
  const msg = {
    to: recipients,
    from: 'your-email@example.com', // Use your verified SendGrid sender email
    subject: 'She Said Yes!',
    text: 'Will you be my girlfriend? She said yes!',
    html: '<strong>Will you be my girlfriend? She said yes!</strong>',
  };

  try {
    await sgMail.sendMultiple(msg);
    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

export default sendEmail;
