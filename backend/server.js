const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// GET /api/students - Read students from students.json
app.get('/api/students', (req, res) => {
  try {
    const studentsPath = path.join(__dirname, 'students.json');
    const studentsData = fs.readFileSync(studentsPath, 'utf8');
    const students = JSON.parse(studentsData);
    res.json(students);
  } catch (error) {
    console.error('Error reading students.json:', error);
    res.status(500).json({ error: 'Failed to read students data' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
