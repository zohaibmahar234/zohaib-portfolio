const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    // Configure with your email provider in production
    // For now returns success so you can test the full flow
    console.log('📧 Contact form submission:', { name, email, subject, message });

    // Uncomment and configure for real email sending:
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    // });
    // await transporter.sendMail({
    //   from: email,
    //   to: 'zohaibmahar486@gmail.com',
    //   subject: `Portfolio Contact: ${subject || 'New Message'}`,
    //   text: `From: ${name} <${email}>\n\n${message}`
    // });

    res.json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
