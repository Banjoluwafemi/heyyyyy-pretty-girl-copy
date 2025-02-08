import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { recipientEmails, subject, message } = req.body;

  if (!recipientEmails || recipientEmails.length === 0) {
    return res.status(400).json({ message: "Recipient email(s) required" });
  }

  // Create a transporter using your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change this if using another provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // App-specific password (not your normal password)
    },
  });

  const mailOptions = {
    from: `"Banjo Oluwafemi Peace" <${process.env.EMAIL_USER}>`,
    to: recipientEmails.join(","), // Multiple recipients
    subject,
    text: message,
    html: `<p>${message}</p>`, // Optional: send HTML content
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error sending email", error });
  }
}
