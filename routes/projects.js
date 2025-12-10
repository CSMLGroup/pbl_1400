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
    estimatedTime: '3-4 hours',
    language: 'python',
    starterCode: `# Number Guessing Game
import random

def play_game():
    # TODO: Generate random number between 1 and 100
    secret_number = random.randint(1, 100)
    
    # TODO: Initialize guess counter
    attempts = 0
    
    # TODO: Create game loop
    while True:
        # TODO: Get user input
        guess = int(input("Guess a number between 1 and 100: "))
        attempts += 1
        
        # TODO: Compare and provide feedback
        if guess < secret_number:
            print("Too low! Try again.")
        elif guess > secret_number:
            print("Too high! Try again.")
        else:
            print(f"Correct! You found it in {attempts} attempts!")
            break

# TODO: Call the function
if __name__ == "__main__":
    play_game()
`,
    hints: [
      'Use random.randint() to generate a random number',
      'Keep track of attempts with a counter',
      'Use a while loop to keep playing until correct',
      'Compare the guess with the secret number'
    ]
  },
  {
    id: 2,
    title: 'Todo List Application',
    description: 'Create a task management app with AI-powered task prioritization and suggestions.',
    difficulty: 'Intermediate',
    topics: ['Data Structures', 'File I/O', 'Object-Oriented Programming'],
    aiFeatures: ['Task Prioritization', 'Smart Suggestions'],
    estimatedTime: '5-7 hours',
    language: 'python',
    starterCode: `class TodoList:
    def __init__(self):
        self.tasks = []
    
    def add_task(self, title, priority='medium'):
        # TODO: Create a task dictionary and add to list
        task = {
            'id': len(self.tasks) + 1,
            'title': title,
            'priority': priority,
            'completed': False
        }
        self.tasks.append(task)
    
    def list_tasks(self):
        # TODO: Display all tasks
        for task in self.tasks:
            status = "✓" if task['completed'] else "○"
            print(f"{status} [{task['priority']}] {task['title']}")
    
    def complete_task(self, task_id):
        # TODO: Mark task as completed
        for task in self.tasks:
            if task['id'] == task_id:
                task['completed'] = True
                print(f"Task '{task['title']}' completed!")
                return
        print("Task not found!")

# TODO: Test the application
if __name__ == "__main__":
    todo = TodoList()
    todo.add_task("Learn Python", "high")
    todo.add_task("Build a project", "high")
    todo.list_tasks()
`,
    hints: [
      'Use a list to store tasks',
      'Each task should be a dictionary with id, title, priority, and completed status',
      'Create methods to add, list, and complete tasks',
      'Use list comprehension to filter tasks'
    ]
  },
  {
    id: 3,
    title: 'Simple Chatbot',
    description: 'Develop a conversational chatbot with pattern matching and AI-driven responses.',
    difficulty: 'Intermediate',
    topics: ['String Processing', 'Regular Expressions', 'Algorithms'],
    aiFeatures: ['Natural Language Processing', 'Dynamic Responses'],
    estimatedTime: '6-8 hours',
    language: 'python',
    starterCode: `import re
import random

class Chatbot:
    def __init__(self, name="ChatBot"):
        self.name = name
    
    def process_input(self, user_input):
        # TODO: Convert to lowercase for matching
        user_input = user_input.lower().strip()
        
        # TODO: Match patterns and respond
        if re.search(r'(hello|hi|hey)', user_input):
            return 'Hello! How can I help you?'
        elif re.search(r'how are you', user_input):
            return 'I am doing great, thank you!'
        else:
            return "I didn't understand that. Could you rephrase?"
    
    def chat(self):
        # TODO: Create a conversation loop
        print(f"{self.name}: Hello! Type 'quit' to exit.")
        while True:
            user_input = input("You: ")
            if user_input.lower() == 'quit':
                print(f"{self.name}: Goodbye!")
                break
            response = self.process_input(user_input)
            print(f"{self.name}: {response}")

# TODO: Start the chatbot
if __name__ == "__main__":
    bot = Chatbot()
    bot.chat()
`,
    hints: [
      'Use regular expressions to match patterns',
      'Create a dictionary to store response types',
      'Use a conversation loop that exits on "quit"',
      'Process user input by converting to lowercase'
    ]
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'Build an interactive dashboard to visualize data with AI-generated insights.',
    difficulty: 'Advanced',
    topics: ['Data Analysis', 'Visualization', 'API Integration'],
    aiFeatures: ['Automated Insights', 'Trend Detection'],
    estimatedTime: '8-10 hours',
    language: 'python',
    starterCode: `import json

class DataDashboard:
    def __init__(self):
        self.data = []
    
    def add_data_point(self, label, value):
        # TODO: Add a data point to the dashboard
        self.data.append({'label': label, 'value': value})
    
    def get_statistics(self):
        # TODO: Calculate min, max, average
        if not self.data:
            return None
        values = [d['value'] for d in self.data]
        return {
            'min': min(values),
            'max': max(values),
            'average': sum(values) / len(values)
        }
    
    def display(self):
        # TODO: Display data and statistics
        print("Dashboard Data:")
        for item in self.data:
            print(f"  {item['label']}: {item['value']}")
        stats = self.get_statistics()
        if stats:
            print(f"\\nStatistics: {stats}")

# TODO: Test the dashboard
if __name__ == "__main__":
    dashboard = DataDashboard()
    dashboard.add_data_point("Jan", 100)
    dashboard.add_data_point("Feb", 120)
    dashboard.add_data_point("Mar", 110)
    dashboard.display()
`,
    hints: [
      'Use lists to store data points',
      'Calculate statistics like min, max, and average',
      'Format data for display',
      'Consider using libraries like matplotlib for visualization'
    ]
  },
  {
    id: 5,
    title: 'Hangman Game with AI Opponent',
    description: 'Create a word-guessing game where an AI opponent learns from player strategies.',
    difficulty: 'Intermediate',
    topics: ['Loops', 'Conditionals', 'Game Logic'],
    aiFeatures: ['Adaptive Learning', 'Strategic AI'],
    estimatedTime: '4-5 hours',
    language: 'python',
    starterCode: `import random

class HangmanGame:
    def __init__(self):
        self.words = ['python', 'hangman', 'programming', 'developer', 'code']
        self.word = random.choice(self.words).upper()
        self.guessed_letters = set()
        self.wrong_guesses = 0
        self.max_wrong = 6
    
    def display_word(self):
        # TODO: Show word with blanks for unguessed letters
        display = ''
        for letter in self.word:
            if letter in self.guessed_letters:
                display += letter + ' '
            else:
                display += '_ '
        return display
    
    def guess_letter(self, letter):
        # TODO: Process a letter guess
        letter = letter.upper()
        if letter in self.guessed_letters:
            return "Already guessed!"
        self.guessed_letters.add(letter)
        if letter not in self.word:
            self.wrong_guesses += 1
        return "Good guess!" if letter in self.word else "Wrong!"
    
    def is_game_over(self):
        # TODO: Check if game is won or lost
        return self.wrong_guesses >= self.max_wrong or set(self.word) <= self.guessed_letters
    
    def play(self):
        # TODO: Main game loop
        print("Welcome to Hangman!")
        while not self.is_game_over():
            print(f"\\nWord: {self.display_word()}")
            print(f"Wrong guesses: {self.wrong_guesses}/{self.max_wrong}")
            guess = input("Guess a letter: ")
            print(self.guess_letter(guess))
        
        if set(self.word) <= self.guessed_letters:
            print(f"\\nYou won! The word was {self.word}")
        else:
            print(f"\\nYou lost! The word was {self.word}")

if __name__ == "__main__":
    game = HangmanGame()
    game.play()
`,
    hints: [
      'Use sets to track guessed letters',
      'Create methods for displaying the word state',
      'Implement game logic to check win/loss conditions',
      'Track wrong guesses to determine game over'
    ]
  },
  {
    id: 6,
    title: 'Quiz Application with Adaptive Learning',
    description: 'Build a quiz system that adapts questions based on student performance using AI.',
    difficulty: 'Advanced',
    topics: ['Database Basics', 'Authentication', 'Assessment'],
    aiFeatures: ['Question Generation', 'Performance Analysis'],
    estimatedTime: '10-12 hours',
    language: 'python',
    starterCode: `class Quiz:
    def __init__(self):
        self.questions = [
            {
                'question': 'What is the capital of France?',
                'options': ['Paris', 'London', 'Berlin', 'Madrid'],
                'correct': 'Paris',
                'difficulty': 'easy'
            },
            {
                'question': 'What is 2 + 2?',
                'options': ['3', '4', '5', '6'],
                'correct': '4',
                'difficulty': 'easy'
            }
        ]
        self.score = 0
        self.answered = 0
    
    def ask_question(self, question):
        # TODO: Display question and options
        print(f"\\nQuestion: {question['question']}")
        for i, option in enumerate(question['options'], 1):
            print(f"{i}. {option}")
        return input("Your answer: ")
    
    def check_answer(self, user_answer, correct_answer):
        # TODO: Check if answer is correct
        return user_answer.lower() == correct_answer.lower()
    
    def take_quiz(self):
        # TODO: Run through all questions
        print("Welcome to the Quiz!")
        for question in self.questions:
            answer = self.ask_question(question)
            if self.check_answer(answer, question['correct']):
                self.score += 1
                print("Correct!")
            else:
                print(f"Wrong! The correct answer is {question['correct']}")
            self.answered += 1
        
        percentage = (self.score / self.answered) * 100
        print(f"\\nQuiz Complete! Score: {self.score}/{self.answered} ({percentage}%)")

if __name__ == "__main__":
    quiz = Quiz()
    quiz.take_quiz()
`,
    hints: [
      'Store questions as a list of dictionaries',
      'Track score and answered questions',
      'Implement adaptive difficulty based on performance',
      'Calculate and display final score as percentage'
    ]
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

router.get('/:id/editor', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).render('404', { title: 'Project Not Found' });
  }
  res.render('projects/editor', {
    title: `${project.title} - Code Editor`,
    project: project
  });
});

module.exports = router;
