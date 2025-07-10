# Insight360

Insight360 is a modern, full-stack news website that provides the latest updates on various topics including technology, science, sports, entertainment, business, and health. The website features a responsive design, video gallery, news articles with search functionality, user authentication system, and newsletter subscription.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- 📰 **Dynamic News Display** - Latest news articles by category (Technology, Science, Sports, Entertainment, Business, Health)
- 🎥 **Video Gallery** - Curated video content with featured videos and thumbnails
- 🔐 **User Authentication** - Complete registration and login system with JWT tokens
- 📧 **Newsletter Subscription** - Email subscription with responsive input form
- 🔍 **Advanced Search** - Search functionality across all news articles
- 📱 **Responsive Design** - Mobile-friendly interface with modern styling
- 🎨 **Modern UI/UX** - Clean design with hover effects and smooth animations
- 🏠 **Homepage Hero Section** - Featured article display with side articles
- 🔄 **Real-time Updates** - Live news feeds from NewsAPI
- 🌐 **Social Media Integration** - Social media links and sharing capabilities
- 📊 **Context Management** - React Context for state management
- 🔒 **Secure Backend** - Password hashing and JWT authentication
- 🐳 **Docker Support** - Containerized MongoDB setup
- 🎯 **Category Navigation** - Easy navigation between different news categories

## Project Structure

```
insight360/
├── frontend/                 # React frontend application
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/           # Images and static assets
│   │   │   ├── logo.png
│   │   │   └── logo-2.png
│   │   ├── components/       # React components
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── MainSection.jsx
│   │   │   ├── MainSection.css
│   │   │   ├── Newsletter.jsx
│   │   │   ├── Newsletter.css
│   │   │   ├── NewsList.jsx
│   │   │   ├── NewsList.css
│   │   │   ├── NewsPage.jsx
│   │   │   ├── NewsPage.css
│   │   │   ├── SearchArticle.jsx
│   │   │   ├── SearchArticle.css
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignIn.css
│   │   │   ├── SignUp.jsx
│   │   │   ├── SignUp.css
│   │   │   ├── VideoGallery.jsx
│   │   │   └── VideoGallery.css
│   │   ├── context/          # React context for state management
│   │   │   └── AuthContext.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── mongo-init.js        # MongoDB initialization script
│   ├── package.json
│   └── server.js
├── .gitignore
├── LICENSE
├── docker-compose.yml       # Docker configuration for MongoDB
├── insight360.code-workspace # VSCode workspace configuration
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/deviant101/insight360.git
   cd insight360
   ```

2. **Install dependencies for both frontend and backend:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both `frontend` and `backend` directories
   - Fill in your actual values

4. **Start MongoDB using Docker:**
   ```bash
   # From the root directory
   docker-compose up -d mongodb
   ```

5. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

6. **Start the frontend application:**
   ```bash
   cd frontend
   npm start
   ```

### Manual Installation

If you prefer to install and run each part separately:

1. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

## Environment Variables

### Backend (`backend/.env`)
```env
# MongoDB connection string
# For local development with Docker
MONGO_URI=mongodb://root:example@localhost:27017/insight360?authSource=admin

# Alternative: Using the created application user
# MONGO_URI=mongodb://insight360_user:insight360_pass@localhost:27017/insight360

# For production (replace with your actual MongoDB URI)
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/insight360?retryWrites=true&w=majority

# JWT Secret for authentication
JWT_SECRET=7f4e0a86bcd844b89a8c62e1c235bc42f0e7e0e279b54688b08f9b2dc85d8ab0

# Server port
PORT=5000

# Node environment
NODE_ENV=development
```

### Frontend (`frontend/.env`)
```env
# News API Key from https://newsapi.org/
REACT_APP_NEWS_API_KEY=your_news_api_key_here

# Backend API URL (for production)
REACT_APP_API_URL=http://localhost:5000
```

> **Note:** Get your News API key from [NewsAPI.org](https://newsapi.org/)

## Running the Project

### Development Mode

**Prerequisites: Start MongoDB First**

Before running the backend, make sure MongoDB is running:

**Option 1: Using Docker (Recommended)**
```bash
docker-compose up -d mongodb
```

**Option 2: Local MongoDB Installation**
- Make sure MongoDB is installed and running locally on `mongodb://localhost:27017`

**Then start the application:**

Backend (after MongoDB is running):
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

Frontend (in a separate terminal):
```bash
cd frontend
npm start
```

### Production Mode

1. **Start MongoDB** (Docker or local installation)
2. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```
3. **Start the backend:**
   ```bash
   cd backend
   npm start
   ```

### Docker Commands for MongoDB

**Start MongoDB:**
```bash
docker-compose up -d mongodb
```

**Check MongoDB logs:**
```bash
docker-compose logs mongodb
```

**Stop MongoDB:**
```bash
docker-compose down
```

**Access MongoDB shell:**
```bash
docker exec -it insight360-mongodb mongosh --username root --password example --authenticationDatabase admin
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Request/Response Examples

**Register User:**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login User:**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Frontend Routes
- `/` - Homepage with featured articles, news lists, and video gallery
- `/technology` - Technology news category page
- `/science` - Science news category page
- `/sports` - Sports news category page
- `/entertainment` - Entertainment news category page
- `/business` - Business news category page
- `/health` - Health news category page
- `/signin` - User login page
- `/signup` - User registration page
- `/search?q=query` - Search results page

## Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router DOM** - Routing for React applications
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and responsive design
- **FontAwesome** - Icon library for social media and UI icons

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing middleware

### External APIs
- **NewsAPI** - For fetching news articles ([Get API Key](https://newsapi.org/))
- **YouTube** - For video content (embedded videos)

### Development Tools
- **Docker** - For MongoDB containerization
- **Nodemon** - For backend development auto-reload
- **VS Code** - Recommended IDE with workspace configuration

## Development Scripts

### Root Level (Manual Commands)
Since there's no root-level package.json, run these commands in separate terminals:

**Start MongoDB:**
```bash
# Start MongoDB using Docker
docker-compose up -d mongodb
```

**Start Backend:**
```bash
cd backend
npm install  # First time only
npm run dev  # Development with auto-reload
# OR
npm start    # Production mode
```

**Start Frontend:**
```bash
cd frontend
npm install  # First time only
npm start    # Development server
```

### Frontend Scripts
- `npm start` - Start React development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon (auto-reload)
- `npm test` - Run tests (placeholder)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Farrukh Riaz**
- GitHub: [@deviant101](https://github.com/deviant101)

---

Made with ❤️ by Farrukh Riaz
