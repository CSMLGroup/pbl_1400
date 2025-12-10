# Project-Based AI Learning Platform

## Overview

This is a Node.js-based website for the **Making Programming Fun with Project-Based AI Learning** initiative, designed for **CS 1400: Fundamentals of Programming**.

### Mission

This project explores how project-based learning combined with AI-driven content integration can enhance student engagement in introductory programming courses. The platform provides:

- **Real-world Programming Projects** - Hands-on projects that emphasize problem-solving and creativity
- **AI-Powered Support** - Adaptive feedback, personalized practice problems, and intelligent hints
- **Dynamic Learning** - Engaging storylines and interactive scenarios to sustain student interest
- **Comprehensive Resources** - Tutorials, guides, and research materials to support learning

## Project Structure

```
pbl_sotl/
├── server.js                 # Express server entry point
├── package.json              # Project dependencies
├── .env                       # Environment configuration
├── routes/
│   ├── index.js             # Home page routes
│   ├── projects.js          # Project listing and details
│   ├── resources.js         # Learning resources
│   └── about.js             # About page
├── views/
│   ├── index.ejs            # Home page
│   ├── about.ejs            # About page
│   ├── header.ejs           # Header template
│   ├── footer.ejs           # Footer template
│   ├── 404.ejs              # 404 error page
│   ├── error.ejs            # Server error page
│   ├── projects/
│   │   ├── list.ejs         # Projects listing
│   │   └── detail.ejs       # Project details
│   └── resources/
│       └── list.ejs         # Resources listing
└── public/
    └── css/
        └── style.css        # Global styles
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/saikatdas/Desktop/Projects/pbl_sotl
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** (already created with default values):
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Features

### 1. Home Page
- Overview of the initiative
- Featured projects showcase
- Key features and benefits
- Call-to-action buttons

### 2. Projects
- **6 Curated Projects** ranging from Beginner to Advanced:
  - Interactive Number Guessing Game
  - Todo List Application
  - Simple Chatbot
  - Data Visualization Dashboard
  - Hangman Game with AI Opponent
  - Quiz Application with Adaptive Learning

Each project includes:
- Difficulty level assessment
- Learning topics covered
- Estimated completion time
- AI-powered features
- Detailed project information
- Getting started guide

### 3. Resources
- Learning tutorials and guides
- Research papers on AI in education
- Code examples and best practices
- Debugging tips
- Resource categorization

### 4. About Page
- Comprehensive overview of the initiative
- Research questions and vision
- Learning approach explanation
- Implementation timeline
- Evaluation methodology
- Long-term vision

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **EJS** - Templating engine
- **CSS3** - Styling (responsive design)
- **dotenv** - Environment management

## Key Sections

### Navigation
- Home - Overview and featured projects
- Projects - Complete project catalog
- Resources - Learning materials
- About - Initiative details and research info

### Project Categories
- **Beginner** - Foundational concepts, 3-4 hours
- **Intermediate** - Building on basics, 5-8 hours
- **Advanced** - Complex systems, 8-12 hours

### AI Features
Projects include various AI-powered features:
- Adaptive Difficulty adjustment
- Smart Hints and guidance
- Task Prioritization
- Natural Language Processing
- Automated Insights
- Performance Analysis
- Dynamic Question Generation

## Customization

### Adding New Projects
Edit `routes/projects.js` and add entries to the `projects` array with:
- Title, description, difficulty
- Topics and AI features
- Estimated completion time

### Updating Resources
Edit `routes/resources.js` to add new learning materials

### Styling
All styles are in `public/css/style.css`:
- CSS variables for theming
- Responsive design (mobile, tablet, desktop)
- Smooth transitions and hover effects

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Development Notes

- EJS templates are in `/views`
- Static assets (CSS, images) go in `/public`
- Each page has its own styling applied
- Responsive design works on all device sizes
- Color scheme uses indigo/purple gradient (primary colors)

## Future Enhancements

Potential features to add:
- User authentication and accounts
- Project submission and grading
- AI-powered chatbot integration
- Progress tracking dashboard
- Discussion forums
- Real-time collaboration tools
- Mobile app version

## License

MIT License

## Contact

For questions about this initiative, contact the CS 1400 course coordinator or research team.

---

**Making Programming Fun with Project-Based AI Learning**
Enhancing student engagement through innovative, AI-driven, hands-on learning experiences.
