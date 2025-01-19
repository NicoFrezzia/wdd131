// Select the dropdown, body, and logo elements
const themeSelector = document.querySelector('#themeSelector');
const body = document.body;
const logo = document.querySelector('#logo');

// Function to initialize the theme based on the dropdown value
function initializeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        if (logo) logo.src = 'byui-logo_white.png'; // Use the white logo
    } else {
        body.classList.remove('dark');
        if (logo) logo.src = 'byui-logo_blue.webp'; // Use the blue logo
    }
}

// Function to handle theme changes
function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); // Enable dark theme
        if (logo) logo.src = 'byui-logo_white.png'; // Switch to the white logo
    } else {
        body.classList.remove('dark'); // Revert to light theme
        if (logo) logo.src = 'byui-logo_blue.webp'; // Switch back to the blue logo
    }
}

// Add event listener to the dropdown
themeSelector.addEventListener('change', changeTheme);

// Initialize theme on page load
initializeTheme();