document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search");
    const recipesContainer = document.getElementById("recipes");

    import("./recipes.mjs").then(module => {
        const recipes = module.default;
        displayRecipes(recipes);
    });

    function displayRecipes(recipes) {
        recipesContainer.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            const image = document.createElement("img");
            image.src = recipe.image;
            image.alt = recipe.name;

            const recipeContent = document.createElement("div");
            recipeContent.classList.add("recipe-content");
            // Category
            const categoryTag = document.createElement("span");
            categoryTag.classList.add("category");
            categoryTag.textContent = recipe.category ? recipe.category.toLowerCase() : "uncategorized";
            recipeContent.appendChild(categoryTag); // Add category first

            // Recipe title
            const title = document.createElement("h2");
            title.textContent = recipe.name;

            // Rating
            const rating = document.createElement("div");
            rating.classList.add("rating");
            rating.setAttribute("role", "img");
            rating.setAttribute("aria-label", `Rating: ${recipe.rating} out of 5 stars`);
            rating.innerHTML = generateStars(recipe.rating);

            // Description
            const description = document.createElement("p");
            description.textContent = recipe.description;

            // Append elements in order
            recipeContent.appendChild(title);
            recipeContent.appendChild(rating);
            recipeContent.appendChild(description);
            
            recipeCard.appendChild(image);
            recipeCard.appendChild(recipeContent);
            
            recipesContainer.appendChild(recipeCard);
        });
    }

    function generateStars(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += i <= rating ? "⭐" : "☆";
        }
        return stars;
    }
});