const path = require('path');

// Import the File System module to read from and write to the subscribers JSON file.
const fs = require("fs");
// Import Nodemailer for handling outgoing emails from contact forms.
const nodemailer = require('nodemailer');
// Load shared practice area data for dynamic rendering.
const practiceAreas = require('../public/js/data/practice-areas');
// Load shared publications data for dynamic rendering across the website.
const publications = require('../public/js/data/publications');
const express = require('express');
const router = express.Router();

// UPDATED!
// Pass the three most recent publications to the homepage.
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    publications: publications.slice(0, 3)
  });
});

router.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us' });
});

// UPDATED!
// Pass all practice areas to the Practice Areas page.
router.get('/practice-areas', (req, res) => {
  res.render('practice-areas', {
    title: 'Practice Areas',
    practiceAreas
  });
});

router.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contact Us' });
});

// Publications Page
// UPDATED!
// Pass the complete publications list to the Publications page.
router.get('/publications', (req, res) => {
  res.render('publications', {
    title: 'Publications',
    publications
  });
});

// Practice Area Detail Dynamic Page
router.get('/practice-area/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let practiceAreas = [];
  let practiceArea = null;

  try {
    const dataPath = path.join(__dirname, '../public/js/data/practice-areas.js');
    delete require.cache[require.resolve(dataPath)];
    const dataModule = require(dataPath);
    practiceAreas = dataModule.default || dataModule;

    practiceArea = practiceAreas.find(area => area.id === id);
  } catch (err) {
    console.error('Error loading practice areas data:', err);
  }

  res.render('practice-area', {
    practiceArea: practiceArea,
    practiceAreas: practiceAreas
  });
});

// Individual Attorney Profile
router.get('/attorney/:slug', (req, res) => {
    const slug = req.params.slug;
    const dataModule = require('../public/js/data/team.js');
    const teamMembers = dataModule.default || dataModule;
    
    const attorney = teamMembers.find(member => member.slug === slug);

    if (!attorney) {
        return res.status(404).render('404');
    }

    res.render('attorney', { attorney });
});

// Process contact form submissions and send the details to the configured email address.
router.post('/contact', async (req, res) => {
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

    res.redirect('/contacts?success=true');
  } catch (error) {
    console.error('Email sending failed:', error);
    res.redirect('/contacts?error=true');
  }
});

// Save newsletter subscribers to a local JSON file.
router.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.redirect("/");
  }

  const filePath = path.join(__dirname, "../subscribers.json");

  let subscribers = [];

  try {
    if (fs.existsSync(filePath)) {
      subscribers = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
  } catch (err) {
    subscribers = [];
  }

  // Prevent duplicate subscriptions
  const exists = subscribers.some(
    (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
  );

  if (!exists) {
    subscribers.push({
      email,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
  }

  res.redirect("/");
});

module.exports = router;