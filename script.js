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
  } catch (error) {
    console.error(error);
  }
}

const recipes = [
  {
    id: "1",
    title: "Vegan Chocolate Cake",
    image: "https://apipics.s3.amazonaws.com/cakes_api/10.jpg"
  },
  {
    id: "2",
    title: "Vegan Lasagna",
    image: ""
    
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

  if (recipe.image) {
    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.title;
    recipeDiv.appendChild(image);
  }

  recipeDiv.appendChild(title);

  return recipeDiv;
}

// Kör funktionen när sidan laddas
window.onload = fetchAndDisplayData;

//kontakt forum
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way
  alert("Your email has been sent!");
  document.getElementById("contactForm").reset()
});

//scrolla up
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
  
window.onscroll = function() {
  var btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};