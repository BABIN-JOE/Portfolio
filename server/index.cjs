const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  // Configure your email transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_PASS
    }
  });
  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));