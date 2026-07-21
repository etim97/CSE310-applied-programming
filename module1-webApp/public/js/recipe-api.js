// Recipe API module
const SPOONACULAR_API_KEY = 'de411d4193c34811b4800fe8a26d2914';
export async function fetchRecipes(query) {
  try {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&number=10&apiKey=${SPOONACULAR_API_KEY}`);
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Function to fetch detailed recipe information

export async function fetchRecipeDetails(id) {
  try {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${SPOONACULAR_API_KEY}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}