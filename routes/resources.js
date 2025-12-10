const express = require('express');
const router = express.Router();

const resources = [
  {
    id: 1,
    title: 'Python Fundamentals Guide',
    category: 'Tutorial',
    description: 'Comprehensive guide to Python basics with interactive examples.',
    link: '#',
    type: 'Document'
  },
  {
    id: 2,
    title: 'AI in Education Research Paper',
    category: 'Research',
    description: 'Latest findings on AI-assisted learning effectiveness.',
    link: '#',
    type: 'PDF'
  },
  {
    id: 3,
    title: 'Problem-Solving Techniques',
    category: 'Tutorial',
    description: 'Learn effective strategies for breaking down complex programming problems.',
    link: '#',
    type: 'Video'
  },
  {
    id: 4,
    title: 'Code Style and Best Practices',
    category: 'Guide',
    description: 'Writing clean, maintainable, and professional code.',
    link: '#',
    type: 'Document'
  },
  {
    id: 5,
    title: 'Debugging Tips and Tricks',
    category: 'Tutorial',
    description: 'Master debugging techniques to solve errors efficiently.',
    link: '#',
    type: 'Video'
  },
  {
    id: 6,
    title: 'Project-Based Learning Framework',
    category: 'Research',
    description: 'Educational framework for effective project-based learning.',
    link: '#',
    type: 'PDF'
  }
];

router.get('/', (req, res) => {
  res.render('resources/list', {
    title: 'Learning Resources',
    resources: resources
  });
});

module.exports = router;
