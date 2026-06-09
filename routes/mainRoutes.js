const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/main', (req, res) => {
  res.render('layouts/main', { title: 'Main' });
});

router.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us' });
});

router.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contact Us' });
});

router.get('/news', (req, res) => {
  res.render('news', { title: 'News & Insights' });
});

module.exports = router;