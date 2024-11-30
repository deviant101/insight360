# Insight360
Insight360 is a news website that provides the latest updates on various topics including technology, science, sports, entertainment, business, and health. The website features a video gallery, news articles, and a newsletter subscription.

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

- Display latest news articles by category
- Video gallery with featured and other videos
- User authentication (Sign Up, Sign In)
- Newsletter subscription
- Responsive design

## Project Structure
The project structure is as follows:

```
insight360/
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── docker-compose.yml
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.css
│   │   │   ├── Header.jsx
│   │   │   ├── MainSection.css
│   │   │   ├── MainSection.jsx
│   │   │   ├── Newsletter.css
│   │   │   ├── Newsletter.jsx
│   │   │   ├── NewsList.css
│   │   │   ├── NewsList.jsx
│   │   │   ├── SearchArticle.css
│   │   │   ├── SearchArticle.jsx
│   │   │   ├── SignIn.css
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.css
│   │   │   ├── SignUp.jsx
│   │   │   ├── VideoGallery.css
│   │   │   └── VideoGallery.jsx
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .env
│   └── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/insight360.git
    cd insight360
    ```

2. Install dependencies for the frontend:
    ```sh
    cd frontend
    npm install
    ```

3. Install dependencies for the backend:
    ```sh
    cd backend
    npm install
    ```
## Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```sh
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

Create a `.env` file in the `frontend` directory and add the following environment variables:

```sh
REACT_APP_NEWS_KEY=<your-news-api-key>
```

## Running the Project

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```sh
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

## Technologies Used

- Frontend:
  - React
  - Axios
  - React Router DOM

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT (JSON Web Token)
  - bcrypt

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
