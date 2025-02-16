// Function to get grades from input field
function getGrades() {
    const gradesInput = document.querySelector("#grades").value;
    return gradesInput.split(',').map(grade => grade.trim().toUpperCase());
}

// Function to lookup grade points based on letter grades
function lookupGrade(grade) {
    const gradePoints = {
        "A": 4.0, "B": 3.0, "C": 2.0, "D": 1.0, "F": 0.0
    };
    return gradePoints[grade] !== undefined ? gradePoints[grade] : null;
}

// Function to calculate GPA
function calculateGpa(grades) {
    const gradePoints = grades.map(lookupGrade).filter(point => point !== null);
    
    if (gradePoints.length === 0) return "Invalid Input";

    const total = gradePoints.reduce((sum, value) => sum + value, 0);
    return (total / gradePoints.length).toFixed(2);
}

// Function to display GPA in the HTML page
function displayGpa(gpa) {
    document.querySelector("#output").textContent = `GPA: ${gpa}`;
}

// Click handler function
function clickHandler() {
    const grades = getGrades();
    const gpa = calculateGpa(grades);
    displayGpa(gpa);
}

// Add event listener to button
document.querySelector("#submitButton").addEventListener("click", clickHandler);