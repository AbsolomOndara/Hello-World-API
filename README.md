# Hello-World-API
# Frontend-Backend Connection Demo

A simple project demonstrating how to connect a frontend (HTML/JavaScript) with a backend (Node.js/Express) using a REST API.

## Features

- Backend API endpoint that returns a JSON message
- Frontend interface to fetch and display the backend message
- Clean, responsive UI with visual feedback
- Error handling for failed requests

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Development**: Visual Studio Code

## Project Structure
hello-world-api/
├── backend/
│ ├── index.js # Backend server code
│ └── package.json # Backend dependencies
└── frontend/
└── index.html # Frontend interface


## Setup Instructions

### Prerequisites
- Node.js installed
- Visual Studio Code (or any code editor)
- (Optional) Live Server extension for VSCode

### Installation

1. Clone or download this repository
2. Open the project in VSCode

### Running the Backend

1. Open a terminal in VSCode (`Ctrl + ` `)
2. Navigate to the backend folder:
   ```bash
   cd backend
Install dependencies:

bash
npm install
Start the server:

bash
npm start
The backend will run on http://localhost:3000

Running the Frontend
Right-click on frontend/index.html

Select:

"Open with Live Server" (if using the extension), or

"Copy Path" and paste in your browser

How It Works
The backend exposes an API endpoint at /api/message

When you click the "Get Backend Message" button:

The frontend makes a GET request to the backend

The backend responds with a JSON message

The frontend displays this message

Expected Output
After clicking the button, you should see:

Hello from the backend!
Troubleshooting
If you encounter issues:

Make sure the backend is running (npm start)

Check your browser's console for errors (F12 → Console)

Verify the fetch URL in index.html matches your backend URL

Ensure you've installed all dependencies (npm install)

Next Steps
This project demonstrates the fundamental connection between frontend and backend. You can expand it by:

Adding more API endpoints

Implementing user input that sends data to the backend

Adding a database to store information


This README:
1. Clearly explains the project's purpose
2. Provides setup instructions
3. Includes troubleshooting tips
4. Suggests next steps for learning
5. Uses proper Markdown formatting for good GitHub/GitLab display

You can copy this directly into a `README.md` file in your project's root directory.