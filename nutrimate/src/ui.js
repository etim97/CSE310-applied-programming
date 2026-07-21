import { fetchRecipeDetails } from './recipe-api.js';
import { fetchNutritionData } from './ninjas-api.js';
export async function displayRecipes(recipes) {
  const container = document.getElementById('recipeContainer');
  if (!container) return;

  container.innerHTML = '';

  const detailed = (await Promise.all(
  recipes.slice(0, 5).map(r => fetchRecipeDetails(r.id))
)).filter(item => item && item.title);

detailed.forEach(item => {
  const div = document.createElement('div');
  div.className = 'recipeCard';

  const ingredients = item.extendedIngredients?.map(i => `<li>${i.original}</li>`).join('') || '<li>N/A</li>';
  const summary = item.summary?.replace(/<[^>]+>/g, '') || 'No description';
  const instructions = item.instructions?.replace(/<[^>]+>/g, '') || 'No instructions';

  div.innerHTML = `
    <h2>${item.title}</h2>

    <img src="${item.image}" alt="${item.title}">

    <p><strong>Time:</strong> ${item.readyInMinutes} mins</p>

    <h4>Ingredients</h4>
    <ul>
        ${ingredients}
    </ul>

    <h4>Description</h4>
    <p>${summary}</p>

    <h4>Instructions</h4>
    <p>${instructions}</p>

    <button class="nutriBtn">View Nutrition</button>`;


    div.querySelector('.nutriBtn').addEventListener('click', () => {
      localStorage.setItem('selectedRecipe', item.title);
      window.location.href = "nutrition.html";
    });

    container.appendChild(div);
  });
}

export function displayNutrition(data) {
  const container = document.getElementById('nutritionDetails');
  if (!container) return;

  container.innerHTML = "";

    if (!Array.isArray(data)) {
        container.innerHTML = `<p>${data.error || "Unable to load nutrition data."}</p>`;
        return;
    }

    if (data.length === 0) {
        container.innerHTML = "<p>No nutrition information found.</p>";
        return;
    }

  data.forEach(food => {
    const div = document.createElement('div');
    div.className = 'nutritionCard';

    div.innerHTML = `
    <h3>${food.name}</h3>
    <hr>

    <p><strong>Calories:</strong> ${food.calories}</p>
    <p><strong>Protein:</strong> ${food.protein_g} g</p>
    <p><strong>Fat:</strong> ${food.fat_g} g</p>
    <p><strong>Carbohydrates:</strong> ${food.carbohydrates_total_g} g</p>
    <p><strong>Fiber:</strong> ${food.fiber_g} g</p>
    <p><strong>Sugar:</strong> ${food.sugar_g} g</p>
    `;

    container.appendChild(div);
  });
}
