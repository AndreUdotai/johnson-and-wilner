const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us' });
});

router.get('/practice-areas', (req, res) => {
  res.render('practice-areas', { title: 'Practice Areas' });
});

router.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contact Us' });
});

router.get('/news', (req, res) => {
  res.render('news', { title: 'News & Insights' });
});

// For Publications Page //
router.get('/publications', (req, res) => {
  res.render('publications', { title: 'Publications' });
});

module.exports = router;