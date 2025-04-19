import nodeMailer from 'nodemailer';

export const sendMailer = async (options) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.SMTP_MAIL,
      to: options.email,
      subject: options.subject,
      text: `${options.message} \n\nEmail of the user who sent message: ${options.userEmail}`,
    };

    await transporter.sendMail(mailOption);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export default sendMailer;