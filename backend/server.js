require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Your transporter (use Gmail, Outlook, etc.)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // use App Password, not your regular password
  },
});

// ✅ Booking form endpoint
app.post("/api/send-booking-email", async (req, res) => {
  const { emne, name, email, phoneNumber, people, note } = req.body;

  const htmlTemplate = `
  <h2>New Table Booking Request</h2>
  <p><strong>Emne:</strong> ${emne}</p>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone Number:</strong> ${phoneNumber}</p>
  <p><strong>Number of People:</strong> ${people}</p>
  <p><strong>Note:</strong> ${note || "No additional note"}</p>
`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ahmed.aldhahi.a@gmail.com", // your personal receiving email
    replyTo: email,
    subject: "New Table Booking Request",
    html: htmlTemplate,
  };

  const customerConfirmationOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Booking Confirmation - Mela Café",
    html: `
      <h2>Thank you for your booking, ${name}!</h2>
      <p>We have received your reservation for <strong>${people}</strong> people.</p>
      <p><strong>Emne:</strong> ${emne}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Note:</strong> ${note || "No additional note"}</p>
      <p>We will contact you soon to confirm your booking. If you have any questions, just reply to this email.</p>
      <p>— Mela Café Team</p>
    `,
  };

  try {
    // Send booking to you
    await transporter.sendMail(mailOptions);
    // Send confirmation to customer
    await transporter.sendMail(customerConfirmationOptions);

    res
      .status(200)
      .json({ message: "Booking email and confirmation sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails.", error });
  }
});

// ✅ Contact form endpoint
app.post("/api/send-contact-email", async (req, res) => {
  const { name, email, message } = req.body;

  const htmlTemplate = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ahmed.aldhahi.a@gmail.com",
    replyTo: email,
    subject: "New Contact Form Message",
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Contact email sent successfully!" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ message: "Failed to send contact email.", error });
  }
});

// ✅ Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
