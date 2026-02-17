// Get the backend API URL from environment or default to localhost
const API_URL = window.BACKEND_URL || 'http://localhost:3000';

// Function to load students from the backend
async function loadStudents() {
    const container = document.getElementById('students-container');
    
    try {
        // Show loading state
        container.innerHTML = '<div class="loading">Loading students...</div>';
        
        // Fetch data from backend
        const response = await fetch(`${API_URL}/api/students`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const students = await response.json();
        
        // Display students in a table
        displayStudents(students);
        
    } catch (error) {
        console.error('Error fetching students:', error);
        container.innerHTML = `
            <div class="error">
                <strong>Error!</strong> Failed to load students data.
                <br><br>
                <strong>Details:</strong> ${error.message}
                <br><br>
                <em>Make sure the backend server is running on ${API_URL}</em>
            </div>
        `;
    }
}

// Function to display students in a table
function displayStudents(students) {
    const container = document.getElementById('students-container');
    
    if (!students || students.length === 0) {
        container.innerHTML = '<p>No students found.</p>';
        return;
    }
    
    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Major</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    students.forEach(student => {
        html += `
            <tr>
                <td class="student-id">#${student.id}</td>
                <td class="student-name">${student.name}</td>
                <td>${student.age}</td>
                <td>${student.major}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
}

// Load students when the page loads
document.addEventListener('DOMContentLoaded', loadStudents);
