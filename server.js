require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ✅ Important: Serve static files correctly
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
const mainRoutes = require('./routes/mainRoutes');
// Make the current URL path available to all views.
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});
app.use('/', mainRoutes);

// 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});