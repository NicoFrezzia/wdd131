document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    // Function to toggle the menu on small screens
    function toggleMenu() {
        navLinks.classList.toggle("show");
    }

    // Function to handle resizing the window
    function handleResize() {
        if (window.innerWidth > 1000) {
            navLinks.classList.add("show"); // Show menu on large screens
        } else {
            navLinks.classList.remove("show"); // Hide menu on small screens
        }
    }

    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure correct menu visibility on load
});

// Function to generate the viewer modal
function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

// Function to handle image clicks
function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const clickedImage = event.target;
        const imageSrc = clickedImage.src;
        const altText = clickedImage.alt;

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imageSrc, altText));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

// Function to close the image viewer
function closeViewer() {
    document.querySelector(".viewer").remove();
}

// Attach event listener to the gallery
document.querySelector(".gallery").addEventListener("click", viewHandler);