const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: 'Interactive Number Guessing Game',
    description: 'Build a number guessing game with AI-generated difficulty levels and personalized hints.',
    difficulty: 'Beginner',
    topics: ['Control Flow', 'Functions', 'Random Numbers'],
    aiFeatures: ['Adaptive Difficulty', 'Smart Hints'],
    estimatedTime: '3-4 hours'
  },
  {
    id: 2,
    title: 'Todo List Application',
    description: 'Create a task management app with AI-powered task prioritization and suggestions.',
    difficulty: 'Intermediate',
    topics: ['Data Structures', 'File I/O', 'Object-Oriented Programming'],
    aiFeatures: ['Task Prioritization', 'Smart Suggestions'],
    estimatedTime: '5-7 hours'
  },
  {
    id: 3,
    title: 'Simple Chatbot',
    description: 'Develop a conversational chatbot with pattern matching and AI-driven responses.',
    difficulty: 'Intermediate',
    topics: ['String Processing', 'Regular Expressions', 'Algorithms'],
    aiFeatures: ['Natural Language Processing', 'Dynamic Responses'],
    estimatedTime: '6-8 hours'
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'Build an interactive dashboard to visualize data with AI-generated insights.',
    difficulty: 'Advanced',
    topics: ['Data Analysis', 'Visualization', 'API Integration'],
    aiFeatures: ['Automated Insights', 'Trend Detection'],
    estimatedTime: '8-10 hours'
  },
  {
    id: 5,
    title: 'Hangman Game with AI Opponent',
    description: 'Create a word-guessing game where an AI opponent learns from player strategies.',
    difficulty: 'Intermediate',
    topics: ['Loops', 'Conditionals', 'Game Logic'],
    aiFeatures: ['Adaptive Learning', 'Strategic AI'],
    estimatedTime: '4-5 hours'
  },
  {
    id: 6,
    title: 'Quiz Application with Adaptive Learning',
    description: 'Build a quiz system that adapts questions based on student performance using AI.',
    difficulty: 'Advanced',
    topics: ['Database Basics', 'Authentication', 'Assessment'],
    aiFeatures: ['Question Generation', 'Performance Analysis'],
    estimatedTime: '10-12 hours'
  }
];

router.get('/', (req, res) => {
  res.render('projects/list', {
    title: 'Programming Projects',
    projects: projects
  });
});

router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).render('404', { title: 'Project Not Found' });
  }
  res.render('projects/detail', {
    title: project.title,
    project: project
  });
});

module.exports = router;
