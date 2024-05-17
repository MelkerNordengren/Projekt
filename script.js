 async function fetchAndDisplayData() {
    const url = 'https://the-birthday-cake-db.p.rapidapi.com/10';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '02502b8f42msh0ca4d892530db77p13701fjsn1ffae936b9a9',
        'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result)
      // Skapa en ny <div> för att visa API-resultatet
      const apiResultDiv = document.createElement('div');
      apiResultDiv.innerHTML = result;

      // Hitta den befintliga <div> där du vill lägga till API-resultatet
      const containerDiv = document.getElementById('apiResult');

      // Lägg till den nya <div> i den befintliga <div>
      containerDiv.appendChild(apiResultDiv);
      console.log(apiResultDiv)
    } catch (error) {
      console.error(error);
    }
  }
  
  // Kör funktionen när sidan laddas
  window.onload = fetchAndDisplayData;

 
const recipes = [
  {
    id: "1",
    title: "Vegan Chocolate Cake",
    image: "https://apipics.s3.amazonaws.com/cakes_api/10.jpg"
 
  },
  {
    id: "2",
    title: "Vegan Lasagna",
   
  },

];

// Function to display recipes based on search query
function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = ""; 

  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));

  if (filteredRecipes.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No recipes found.";
    recipeContainer.appendChild(noResults);
  } else {
    filteredRecipes.forEach(recipe => {
      const recipeElement = createRecipeHTML(recipe);
      recipeContainer.appendChild(recipeElement);
    });
  }
}

// skapar HTML
function createRecipeHTML(recipe) {
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");

  const title = document.createElement("h2");
  title.textContent = recipe.title;

  recipeDiv.appendChild(title);

  return recipeDiv;
}

// searchRecipes();