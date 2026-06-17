const path = require('path');

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

// Publications Page
router.get('/publications', (req, res) => {
  res.render('publications', { title: 'Publications' });
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

module.exports = router;