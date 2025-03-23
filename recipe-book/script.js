// script.js

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search");
  const recipesContainer = document.getElementById("recipes");

  // We'll store the recipes in a variable for later use
  let recipes = [];

  // Import recipes from recipes.mjs
  import("./recipes.mjs").then(module => {
    recipes = module.default;
    init();
  });

  // Random functions
  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomListEntry(list) {
    const randomNum = random(list.length);
    return list[randomNum];
  }

  // Template functions
  function recipeTemplate(recipe) {
    return `
      <figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
          <ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
          </ul>
          <h2><a href="#">${recipe.name}</a></h2>
          <p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
          </p>
          <p class="recipe__description">
            ${recipe.description}
          </p>
        </figcaption>
      </figure>
    `;
  }

  function tagsTemplate(tags) {
    // Loop through the tags array and wrap each tag in a <li>
    return tags.map(tag => `<li>${tag}</li>`).join("");
  }

  function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
      html += i <= rating
        ? `<span aria-hidden="true" class="icon-star">⭐</span>`
        : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
  }

  // Render a list of recipes to the page
  function renderRecipes(recipeList) {
    recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
  }

  // Init function: show a random recipe on page load
  function init() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
  }

  // Filtering recipes based on a search query
  function filterRecipes(query) {
    // Convert query to lowercase (should already be lowercased by the caller)
    const filtered = recipes.filter(recipe => {
      return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        (recipe.tags && recipe.tags.find(tag => tag.toLowerCase().includes(query))) ||
        (recipe.ingredients && recipe.ingredients.find(ing => ing.toLowerCase().includes(query)))
      );
    });
    // Sort filtered recipes alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Handler for the search form submission
  function searchHandler(e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  }

  // Attach event listener for the search form
  searchForm.addEventListener("submit", searchHandler);
});