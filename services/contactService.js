// Centralize contact form email handling and Nodemailer logic.
const nodemailer = require('nodemailer');

// Process contact form submissions and send the details to the configured email address.
const sendContactEmail = async (req, res) => {
  const {
    full_name,
    name,
    email,
    phone,
    subject,
    message,
    your_name,
    your_email,
    your_phone
  } = req.body;

  const senderName = full_name || name || your_name || 'No name provided';
  const senderEmail = email || your_email || 'No email provided';
  const senderPhone = phone || your_phone || 'No phone provided';
  const senderSubject = subject || 'Website Contact Form Submission';

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Johnson & Wilner Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: senderEmail,
      subject: `New Website Message: ${senderSubject}`,
      html: `
        <h2>New Website Contact Form Submission</h2>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Phone:</strong> ${senderPhone}</p>
        <p><strong>Subject:</strong> ${senderSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `
    });

    return sendContactResponse(req, res, {
      success: true,
      status: 200,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    return sendContactResponse(req, res, {
      success: false,
      status: 500,
      message: 'Unable to send your message. Please try again.'
    });
  }
};

function wantsJson(req) {
  const accept = req.get('Accept') || '';
  return (
    req.xhr === true ||
    req.get('X-Requested-With') === 'XMLHttpRequest' ||
    accept.includes('application/json')
  );
}

function sendContactResponse(req, res, { success, status, message }) {
  if (wantsJson(req)) {
    return res.status(status).json({ success, message });
  }

  return res.redirect(success ? '/contacts?success=true' : '/contacts?error=true');
}

module.exports = {
  sendContactEmail
};