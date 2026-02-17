# CI-CD-PRACTICE

A full-stack project for CI/CD and Docker practice, featuring a Node.js backend and HTML/JavaScript frontend with automated testing via GitHub Actions.

## 🎯 Project Overview

This project demonstrates modern DevOps practices including:
- Containerization with Docker
- Multi-container orchestration with Docker Compose
- Continuous Integration with GitHub Actions
- RESTful API development
- Frontend-Backend integration

## 📁 Project Structure

```
.
├── backend/                    # Node.js + Express backend
│   ├── server.js              # Express server with API endpoints
│   ├── students.json          # Student data
│   ├── package.json           # Node.js dependencies
│   ├── Dockerfile             # Backend container configuration
│   └── .dockerignore          # Docker ignore rules
├── frontend/                   # HTML + JavaScript frontend
│   ├── index.html             # Main HTML page
│   ├── app.js                 # Frontend JavaScript
│   ├── nginx.conf             # Nginx configuration
│   ├── Dockerfile             # Frontend container configuration
│   └── .dockerignore          # Docker ignore rules
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline
├── docker-compose.yml         # Multi-container orchestration
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Docker (version 20.x or higher)
- Docker Compose (version 2.x or higher)
- Git

### Running with Docker Compose

1. Clone the repository:
```bash
git clone https://github.com/Mafiv/CI-CD-PRACTICE.git
cd CI-CD-PRACTICE
```

2. Start the application:
```bash
docker-compose up -d
```

3. Access the application:
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000/api/students
   - Backend Health: http://localhost:3000/health

4. Stop the application:
```bash
docker-compose down
```

### Running Locally (Without Docker)

#### Backend

```bash
cd backend
npm install
npm start
```

The backend will run on http://localhost:3000

#### Frontend

Open `frontend/index.html` in a web browser, or serve it with a local web server:

```bash
cd frontend
python3 -m http.server 8080
```

The frontend will be available at http://localhost:8080

## 📡 API Endpoints

### GET /api/students
Returns a list of all students.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 20,
    "major": "Computer Science"
  },
  ...
]
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "OK"
}
```

## 🔧 Docker Configuration

### Backend Dockerfile
- Base image: `node:18-alpine`
- Exposed port: 3000
- Optimized for production with multi-stage builds

### Frontend Dockerfile
- Base image: `nginx:alpine`
- Exposed port: 80
- Serves static files with Nginx

### Docker Compose
- Defines two services: backend and frontend
- Creates a custom network for inter-container communication
- Includes health checks for reliability

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration. On every push or pull request:

1. **Build**: Builds Docker images for both backend and frontend
2. **Deploy**: Starts containers using docker-compose
3. **Test**: 
   - Tests backend API endpoints
   - Validates frontend is serving correctly
   - Checks JSON response structure
4. **Cleanup**: Stops and removes containers

View workflow runs in the **Actions** tab on GitHub.

## 🧪 Testing

The CI pipeline automatically tests:
- Backend API returns valid JSON
- Student data is properly formatted
- Frontend HTML loads correctly
- Services can communicate

## 📝 Development

### Adding New Students

Edit `backend/students.json` and add new student objects:

```json
{
  "id": 6,
  "name": "New Student",
  "age": 20,
  "major": "New Major"
}
```

### Modifying the Frontend

Edit `frontend/index.html` for UI changes and `frontend/app.js` for logic changes.

### Rebuilding Containers

After making changes:

```bash
docker-compose down
docker-compose build
docker-compose up -d
```

## 🛠️ Technologies Used

- **Backend**: Node.js, Express, CORS
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Web Server**: Nginx
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Version Control**: Git

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Created as a CI/CD and Docker practice project.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!