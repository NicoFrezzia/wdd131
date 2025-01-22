// Select the dropdown, body, and logo elements
const themeSelector = document.querySelector('#themeSelector');
const body = document.body;
const logo = document.querySelector('#logo');

// Initializes the theme based on the dropdown value
function initializeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        if (logo) logo.src = 'byui-logo_white.png'; // Uses the white logo
    } else {
        body.classList.remove('dark');
        if (logo) logo.src = 'byui-logo_blue.webp'; // Uses the blue logo
    }
}

// Function to handle theme changes
function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); // Enables dark theme
        if (logo) logo.src = 'byui-logo_white.png'; // Switches to the white logo
    } else {
        body.classList.remove('dark'); // Reverts to light theme
        if (logo) logo.src = 'byui-logo_blue.webp'; // Switches back to the blue logo
    }
}

// Event listener to the dropdown
themeSelector.addEventListener('change', changeTheme);

// Initialize theme on page load
initializeTheme();