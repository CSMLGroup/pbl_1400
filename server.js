const express = require('express');
const path = require('path');

// Only load dotenv in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);

// Routes
app.use('/', require('./routes/index'));
app.use('/projects', require('./routes/projects'));
app.use('/resources', require('./routes/resources'));
app.use('/about', require('./routes/about'));

// API Routes (must be before 404 handler)
app.use('/api/execute', require('./routes/execute'));

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Server Error',
    message: 'Something went wrong!'
  });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Project-Based Learning Platform running on http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
