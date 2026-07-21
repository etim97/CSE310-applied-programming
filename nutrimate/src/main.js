import { fetchRecipes } from './recipe-api.js';
import { fetchNutritionData } from './ninjas-api.js';
import { displayRecipes, displayNutrition } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {

  // -----------------------------
  // HAMBURGER MENU + CLOCK
  // -----------------------------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const time = document.querySelector('.time');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  if (time) {
    const updateTime = () => {
      const now = new Date();
      time.textContent = now.toLocaleString();
    };
    setInterval(updateTime, 1000); // update every second
    updateTime(); // initial call
  }

  // -----------------------------
  // HOME PAGE
  // -----------------------------
  const recipeBtn = document.getElementById('recipeBtn');
  const recipeInput = document.getElementById('recipeInput');
  const nutritionBtn = document.getElementById('nutritionBtn');
  const nutritionInput = document.getElementById('nutritionInput');
  const message = document.getElementById ('recipeMessage');

  recipeBtn?.addEventListener('click', () => {
    const query = recipeInput.value.trim();
    if (!query) {
    message.textContent = "Please enter a recipe.";
    return;
}

message.textContent = "";
    localStorage.setItem('recipeQuery', query);
    window.location.href = 'recipe.html';
  });

  nutritionBtn?.addEventListener('click', () => {
    const query = nutritionInput.value.trim();
    if (!query) return alert('Enter a food item');
    localStorage.setItem('selectedRecipe', query);
    window.location.href = 'nutrition.html';
  });

  // -----------------------------
  // RECIPE PAGE
  // -----------------------------
  const page = window.location.pathname.split('/').pop();

  if (page === 'recipe.html') {
    const query = localStorage.getItem('recipeQuery');
    if (query) {
      try {
        const recipes = await fetchRecipes(query);
        displayRecipes(recipes);
      } catch (err) {
        console.error('Error fetching recipes:', err);
      }
    }
  }

  // -----------------------------
  // NUTRITION PAGE
  // -----------------------------
  if (page === 'nutrition.html') {
    const recipe = localStorage.getItem('selectedRecipe');
    if (recipe) {
      try {
        const data = await fetchNutritionData(recipe);
        displayNutrition(data);
      } catch (err) {
        console.error('Error fetching nutrition:', err);
      }
    }
  }
});