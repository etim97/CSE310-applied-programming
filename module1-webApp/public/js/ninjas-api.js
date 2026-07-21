// Ninjas API module

const NINJAS_API_KEY = 'pk1U2k7qil4UXU2uZIf3JQ1JAiEpPWlzj4VNmUVo';
export async function fetchNutritionData(query) {
  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`, {
      headers: { 'X-Api-Key': NINJAS_API_KEY }
    });
    const data = await res.json();

    console.log(data); // Log the data to the console for debugging

    return data;
  } catch (err) {
    console.error(err);
    return []; 
  }
}