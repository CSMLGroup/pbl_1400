// This is the Vercel serverless function entry point
const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

try {
  // Routes
  app.use('/', require('../routes/index'));
  app.use('/projects', require('../routes/projects'));
  app.use('/resources', require('../routes/resources'));
  app.use('/about', require('../routes/about'));
  app.use('/api/execute', require('../routes/execute'));
} catch (error) {
  console.error('Error loading routes:', error);
}

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).render('error', { 
    title: 'Server Error',
    message: 'Something went wrong!'
  });
});

module.exports = app;
