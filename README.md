# Insight360

Insight360 is a modern news website that provides the latest updates on various topics including technology, science, sports, entertainment, business, and health. The website features a video gallery, news articles, user authentication, and a newsletter subscription.

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

- 📰 Display latest news articles by category
- 🎥 Video gallery with featured and other videos
- 🔐 User authentication (Sign Up, Sign In)
- 📧 Newsletter subscription
- 🔍 Search functionality
- 📱 Responsive design
- 🎨 Modern UI/UX

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
│   │   ├── components/       # React components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MainSection.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── NewsList.jsx
│   │   │   ├── NewsPage.jsx
│   │   │   ├── SearchArticle.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── VideoGallery.jsx
│   │   ├── context/          # React context for state management
│   │   │   └── AuthContext.js
│   │   ├── App.js
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
│   ├── docker-compose.yml
│   ├── package.json
│   └── server.js
├── .gitignore
├── LICENSE
├── package.json             # Root package.json for managing both frontend and backend
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

2. **Install all dependencies:**
   ```bash
   npm run install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both `frontend` and `backend` directories
   - Fill in your actual values

4. **Start both frontend and backend:**
   ```bash
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
MONGO_URI=mongodb://localhost:27017/insight360
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
NODE_ENV=development
```

### Frontend (`frontend/.env`)
```env
REACT_APP_NEWS_API_KEY=your_news_api_key_here
REACT_APP_API_URL=http://localhost:5000
```

> **Note:** Get your News API key from [NewsAPI.org](https://newsapi.org/)

## Running the Project

### Development Mode

**Option 1: Run both frontend and backend together**
```bash
npm start
```

**Option 2: Run them separately**

Backend:
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

Frontend:
```bash
cd frontend
npm start
```

### Production Mode

Build the frontend:
```bash
npm run build
```

Start the backend:
```bash
cd backend
npm start
```

### Using Docker (MongoDB)

The easiest way to get MongoDB running for development:

**Start MongoDB:**
```bash
npm run docker:db
# OR
docker-compose up -d mongodb
```

**Check MongoDB logs:**
```bash
npm run docker:logs
```

**Stop MongoDB:**
```bash
npm run docker:down
```

### Manual MongoDB Installation

If you prefer not to use Docker, install MongoDB locally:
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- Make sure it's running on `mongodb://localhost:27017`

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

## Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router DOM** - Routing for React applications
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

### External APIs
- **NewsAPI** - For fetching news articles
- **YouTube** - For video content (embedded)

## Development Scripts

### Root Level
- `npm run install` - Install dependencies for both frontend and backend
- `npm start` - Start both frontend and backend concurrently
- `npm run dev` - Start both in development mode
- `npm run build` - Build frontend for production

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

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
