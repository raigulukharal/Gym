import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import sendMailer from './utils/sendMail.js';


const app = express();

config({ path: './config.env' });

// CORS configuration
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['POST'],
  credentials: true,
}));

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const router = express.Router();

// Mail route
router.post('/send/mail', async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(401)
      .json({ success: false, message: 'Please provide all data!' });
  }

  try {
    await sendMailer({
      email: 'raigulfam853@gmail.com',
      subject: 'GYM WEBSITE CONTACT',
      message,
      userEmail: email,
    });

    return res
      .status(200)
      .json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error!' });
  }
});

// Use the router for defined routes
app.use(router);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
