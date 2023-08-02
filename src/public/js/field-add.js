document.addEventListener("DOMContentLoaded", () => {
  const addIngredientBtn = document.getElementById("add-ingredient-btn");
  const ingredientsList = document.getElementById("ingredients-list");

  addIngredientBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "ingredient";
    input.required = true;
    li.appendChild(input);
    ingredientsList.appendChild(li);
  });
});