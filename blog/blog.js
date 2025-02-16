const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
        imgSrc: "images/magyk.jpg",
        imgAlt: "Cover of Septimus Heap Book One: Magyk",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "Join Magnus Chase on a journey into Norse mythology in this exciting adventure.",
        imgSrc: "images/magnus_chase.jpg",
        imgAlt: "Cover of Magnus Chase Book One: Sword of Summer",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the world divided into five kingdoms.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function renderArticles() {
    const container = document.getElementById("articles-container");
    container.innerHTML = ""; // Clear any existing content

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("book-review");

        articleElement.innerHTML = `
            <div class="book-details">
                <p><strong>${article.date}</strong></p>
                <p>Age: ${article.ages}</p>
                <p>Genre: ${article.genre}</p>
                <p>Rating: ${article.stars}</p>
            </div>
            <div class="book-info">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description} <a href="#">Read More...</a></p>
            </div>
        `;

        container.appendChild(articleElement);
    });
}

// Call function when page loads
document.addEventListener("DOMContentLoaded", renderArticles);