# Insight360 - Full Stack News Application

A comprehensive news aggregation platform built with React frontend, Node.js backend, and MongoDB database, featuring complete CI/CD pipeline with Docker containerization and Azure VM deployment.

## 🚀 DevOps & Cloud Features

### CI/CD Pipeline
- **GitHub Actions**: Automated build, test, and deployment workflow
- **Multi-stage Deployment**: Build → Security Scan → Deploy
- **Branch-based Deployment**: Automatic deployment from master branch
- **Artifact Management**: Build artifacts archiving and distribution

### Container Orchestration
- **Docker Multi-container Setup**: Frontend, Backend, and MongoDB
- **Docker Hub Integration**: Automated image building and pushing
- **Health Checks**: Container health monitoring and automatic restarts
- **Production-ready Configuration**: Optimized for production deployment

### Security & Monitoring
- **Trivy Security Scanning**: Automated vulnerability scanning for Docker images
- **SARIF Integration**: Security results uploaded to GitHub Security tab
- **Container Health Monitoring**: Automated health checks for all services
- **Network Security**: Isolated container networking with bridge configuration

### Azure Cloud Deployment
- **Azure VM Deployment**: Automated deployment to Azure Virtual Machine
- **SSH-based Deployment**: Secure deployment using SSH keys
- **Environment Management**: Production environment variable management
- **Zero-downtime Deployment**: Graceful container replacement strategy

## Table of Contents

- [🚀 DevOps & Cloud Features](#-devops--cloud-features)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Docker Deployment](#docker-deployment)
- [CI/CD Setup](#cicd-setup)
- [Azure Deployment](#azure-deployment)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Features
- Display latest news articles by category
- Video gallery with featured and other videos
- User authentication (Sign Up, Sign In)
- Newsletter subscription
- Responsive design
- Real-time news updates

### DevOps Features
- Automated testing and building
- Container security scanning
- Multi-environment deployment
- Health monitoring and logging
- Automated rollback capabilities

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React App     │    │   Node.js API   │    │   MongoDB       │
│   (Frontend)    │───▶│   (Backend)     │───▶│   (Database)    │
│   Port 80       │    │   Port 5000     │    │   Port 27017    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        └───────────────────────┼───────────────────────┘
                                │
                    ┌─────────────────┐
                    │  Docker Network │
                    │  (app-network)  │
                    └─────────────────┘
```

## Project Structure
The project structure is as follows:

```
insight360/
├── .github/
│   └── workflows/
│       └── 380.yml                    # CI/CD Pipeline configuration
├── backend/
│   ├── controllers/
│   │   └── authController.js          # Authentication logic
│   ├── models/
│   │   └── User.js                    # User data model
│   ├── routes/
│   │   └── authRoutes.js              # Authentication routes
│   ├── Dockerfile                     # Backend container configuration
│   ├── docker-compose.yml             # Development container setup
│   ├── package.json                   # Backend dependencies
│   └── server.js                      # Express server entry point
├── src/                               # Frontend React application
│   ├── assets/                        # Static assets (images, logos)
│   ├── components/                    # React components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MainSection.jsx
│   │   ├── Newsletter.jsx
│   │   ├── NewsList.jsx
│   │   ├── NewsPage.jsx
│   │   ├── SearchArticle.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── VideoGallery.jsx
│   ├── context/
│   │   └── AuthContext.js             # Authentication context
│   └── App.js                         # Main React component
├── public/                            # Public assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── Dockerfile                         # Frontend container configuration
├── docker-compose.prod.yml            # Production container setup
├── package.json                       # Frontend dependencies
└── README.md                          # Project documentation
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- Docker and Docker Compose
- Git
- Azure CLI (for Azure deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/EndIsNearR/insight360.git
   cd insight360
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up Environment Variables**
   Create `.env` files in both root and backend directories (see Environment Variables section)

## Environment Variables

### Frontend Environment Variables (.env)
```env
REACT_APP_NEWS_API_KEY=your_news_api_key_here
```

### Backend Environment Variables (backend/.env)
```env
MONGO_URI=mongodb://localhost:27017/insight360
JWT_SECRET=your_jwt_secret_here
PORT=5000
NODE_ENV=development
```

### Production Environment Variables
For production deployment, these environment variables need to be set in your Azure VM:

```env
# Docker Hub
DOCKERHUB_USERNAME=your_dockerhub_username

# Database
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=your_secure_password

# Backend
JWT_SECRET=your_production_jwt_secret
REACT_APP_NEWS_API_KEY=your_news_api_key

# Azure VM (GitHub Secrets)
AZURE_VM_HOST=your_vm_ip_address
AZURE_VM_USERNAME=azureuser
AZURE_VM_SSH_KEY=your_private_ssh_key
DOCKERHUB_PASSWORD=your_dockerhub_password
```

## Docker Deployment

### Development with Docker Compose

1. **Build and run all services**
   ```bash
   cd backend
   docker-compose up --build
   ```

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Production Deployment

1. **Build production images**
   ```bash
   # Build frontend image
   docker build -t insight360-frontend .
   
   # Build backend image
   docker build -t insight360-backend ./backend
   ```

2. **Run production stack**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Access production application**
   - Frontend: http://localhost:80
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

## CI/CD Setup

### GitHub Actions Workflow

The project includes a comprehensive CI/CD pipeline (`.github/workflows/380.yml`) with three main stages:

#### 1. Build and Test Stage
- **Frontend Build**: Installs dependencies and builds React app
- **Backend Build**: Installs dependencies and runs tests
- **Artifact Archiving**: Stores build artifacts for deployment

#### 2. Docker Build and Security Scan Stage
- **Multi-platform Builds**: Creates Docker images for both frontend and backend
- **Security Scanning**: Uses Trivy to scan for vulnerabilities
- **Registry Push**: Pushes images to Docker Hub
- **SARIF Upload**: Uploads security scan results to GitHub

#### 3. Azure Deployment Stage
- **Environment Setup**: Configures production environment variables
- **Service Deployment**: Deploys full stack using Docker Compose
- **Health Verification**: Runs comprehensive health checks
- **Logging**: Provides detailed deployment logs

### Workflow Triggers
- **Push Events**: Runs on every push to any branch
- **Master Branch**: Only deploys to production from master branch
- **Manual Dispatch**: Can be triggered manually from GitHub Actions

### Security Features
- **Vulnerability Scanning**: Automated security scans with Trivy
- **Secret Management**: Secure handling of sensitive data
- **Network Isolation**: Containers run in isolated networks
- **Health Monitoring**: Continuous health checks for all services

## Azure Deployment

### Azure VM Requirements

1. **VM Specifications**
   - Ubuntu 20.04 LTS or higher
   - Minimum 2 vCPUs, 4GB RAM
   - Docker and Docker Compose installed
   - SSH access enabled

2. **Network Security Group Rules**
   ```
   Port 22  (SSH)     - Source: Your IP
   Port 80  (HTTP)    - Source: Internet
   Port 443 (HTTPS)   - Source: Internet
   Port 5000 (API)    - Source: Internet (optional)
   ```

3. **VM Setup Commands**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Docker
   sudo apt install docker.io docker-compose -y
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   
   # Create application directory
   mkdir -p /home/azureuser/insight360
   ```

### Deployment Process

The deployment is fully automated through GitHub Actions:

1. **Trigger**: Push to master branch
2. **Build**: Creates optimized Docker images
3. **Scan**: Performs security vulnerability scanning
4. **Deploy**: 
   - Copies docker-compose.prod.yml to Azure VM
   - Sets up production environment variables
   - Pulls latest images from Docker Hub
   - Starts services with zero-downtime deployment
   - Performs health checks and verification

### Monitoring and Verification

The deployment process includes comprehensive monitoring:

- **Container Status**: Verifies all containers are running
- **Health Checks**: Tests frontend, backend, and database connectivity
- **Log Analysis**: Captures and displays service logs
- **Port Verification**: Confirms all required ports are accessible

## Running the Project
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
### Local Development

1. **Start MongoDB**
   ```bash
   cd backend
   docker-compose up -d mongo
   ```

2. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

3. **Start the frontend development server**
   ```bash
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Production Mode

1. **Using Docker Compose**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

2. **Access the application**
   - Frontend: http://localhost:80
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

- `POST /api/auth/login` - Login a user
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

### Health Check
- `GET /health` - Backend health check endpoint
  ```json
  {
    "status": "healthy",
    "timestamp": "2025-08-01T10:30:00.000Z"
  }
  ```

## Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Responsive styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (JSON Web Token)** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### DevOps & Cloud
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container application management
- **GitHub Actions** - CI/CD automation
- **Trivy** - Vulnerability scanner
- **Azure VM** - Cloud hosting platform
- **Docker Hub** - Container registry

### Development Tools
- **VS Code** - Code editor
- **Git** - Version control
- **npm** - Package manager
- **ESLint** - Code linting (configurable)

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   ```bash
   # Check if MongoDB container is running
   docker ps | grep mongo
   
   # Check MongoDB logs
   docker logs insight360-mongo
   
   # Verify connection string
   echo $MONGO_URI
   ```

2. **Frontend Build Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Docker Build Failures**
   ```bash
   # Check Docker daemon
   docker version
   
   # Clear Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker build --no-cache -t insight360-frontend .
   ```

4. **Azure Deployment Issues**
   ```bash
   # Check SSH connectivity
   ssh azureuser@your-vm-ip
   
   # Verify Docker installation on VM
   docker --version
   docker-compose --version
   
   # Check container status on VM
   docker ps -a
   ```

### Health Check Commands

```bash
# Check all containers
docker-compose -f docker-compose.prod.yml ps

# Test frontend
curl http://localhost:80

# Test backend
curl http://localhost:5000/health

# Test MongoDB
docker exec insight360-mongo mongosh --eval "db.adminCommand('ping')"

# Check logs
docker logs insight360-frontend --tail 20
docker logs insight360-backend --tail 20
docker logs insight360-mongo --tail 20
```

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm test
   docker-compose -f docker-compose.prod.yml up --build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure Docker builds pass
- Test deployment on Azure VM if possible

## License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the troubleshooting section above
- Review GitHub Actions logs for deployment issues

## 🔗 Links

- **Live Demo**: [Your Azure VM URL]
- **Docker Hub**: [Your Docker Hub Repository]
- **GitHub Repository**: https://github.com/EndIsNearR/insight360
