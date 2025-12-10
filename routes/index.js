const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Project-Based AI Learning Platform',
    subtitle: 'Making Programming Fun with AI-Enhanced Learning'
  });
});

module.exports = router;
