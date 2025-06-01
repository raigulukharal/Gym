import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import sendMailer from './utils/sendMail.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();

// Load environment variables
config({ path: './config.env' });

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL,  // Just one origin, no need for an array
  methods: ['GET', 'POST'],  // It's better to include both GET and POST
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// Mail route
app.post('/send/mail', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all required data.' });
  }

  try {
    await sendMailer({
      email: 'raigulfam853@gmail.com',
      subject: 'GYM WEBSITE CONTACT',
      message,
      userEmail: email,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error!' });
  }
});

// Catch-all for frontend routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
