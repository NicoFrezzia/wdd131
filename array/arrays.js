// arrays.js
const steps = ["one", "two", "three"];

// Function to create an HTML list item from a step
function listTemplate(step) {
  return `<li>${step}</li>`;
}

// Convert the array of steps to an array of HTML strings
const stepsHtml = steps.map(listTemplate);

// Set the innerHTML of #myList to the joined HTML strings
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2 - Convert letter grades to GPA points
const grades = ["A", "B", "A"];

// Function to convert a letter grade to GPA points
function convertGradeToPoints(grade) {
  if (grade === "A") return 4;
  if (grade === "B") return 3;
  return 0; // Default for any other grades
}

// Convert grades array to GPA points
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Calculate GPA using reduce
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;

console.log("GPA Points:", gpa);

// Activity 4 - Filter (Fruits with fewer than 6 characters)
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter(fruit => fruit.length < 6);
console.log("Short Fruits:", shortFruits);

// Activity 5 - indexOf (Finding Lucky Number)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);

if (luckyIndex !== -1) {
  console.log(`Lucky number ${luckyNumber} found at index ${luckyIndex}`);
} else {
  console.log(`Lucky number ${luckyNumber} not found.`);
}