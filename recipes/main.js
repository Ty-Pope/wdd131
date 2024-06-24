import recipes from "./recipes.mjs";

/*
document.getElementById("main").innerHTML = recipes
 .map(
  (recipe) => `
  <div class="recipe">
   <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}" />
   <div class="info">
   <div class="tags">${getTags(recipe.tags)}</div>
   <h2>${recipe.name}</h2>
   <p class="star">${getStars(recipe.rating)}</p>
   <p class="description">${recipe.description}</p>
   </div>
  </div>
`
 )
 .join("");
*/
let info = recipes[Math.floor(Math.random() * recipes.length)];
document.getElementById("main").innerHTML = createTemplate(info);
function createTemplate(recipe) {
 return `
  <div class="recipe">
   <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}" />
   <div class="info">
   <div class="tags">${getTags(recipe.tags)}</div>
   <h2>${recipe.name}</h2>
   <p class="star">${getStars(recipe.rating)}</p>
   <p class="description">${recipe.description}</p>
   </div>
  </div>`;
}
function getTags(tags) {
 return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function getStars(rating) {
 var stars = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
 for (let i = 0; i < 5; i++) {
  stars += `<span aria-hidden="true">${i < rating ? "⭐️" : "☆"}</span>`;
 }
 return stars + "</span>";
}

document.addEventListener("DOMContentLoaded", function () {
 document.getElementById("submit-button").addEventListener("click", searchFilter(document.getElementById("search").value));

 function searchFilter(inputValue) {
  return recipes.filter((recipe) => recipe.name.toLowerCase().includes(inputValue.toLowerCase()));
 }
});
