const path = require('path');

// Load shared client logo data for the homepage trusted brands section.
const clients = require('../public/js/data/clients');
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
    publications: publications.slice(0, 3),
    clients
  });
});

router.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us' });
});

// UPDATED!
// Pass practice areas and recent publications to the Practice Areas page.
router.get('/practice-areas', (req, res) => {
  res.render('practice-areas', {
    title: 'Practice Areas',
    practiceAreas,
    publications: publications.slice(0, 3)
  });
});

router.get('/contacts', (req, res) => {
  res.render('contacts', {
    title: 'Contact Us',
    formSuccess: req.query.success === 'true',
    formError: req.query.error === 'true'
  });
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

// Import and route contact form submissions through the contact email service.
router.post('/contact', require('../services/contactService').sendContactEmail);
// Import and Route newsletter subscriptions through the Mailchimp service.
router.post('/subscribe', require('../services/mailchimpService').subscribeToNewsletter);

module.exports = router;