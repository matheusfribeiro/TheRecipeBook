// Array to store the dishes objects
const dishesData = [];

exports.getIndex = (req, res, next) => {
  res.render("home", {
    pageTitle: "Homepage - Recipes",
    path: "/",
    dishes: dishesData,
  });
};

exports.getCreateRecipe = (req, res, next) => {
  res.render("create-recipe", {
    pageTitle: "The Recipe Book - Create Recipe",
    path: "/create-recipe",
  });
};

exports.postCreateRecipe = (req, res, next) => {
  console.log(req.body);
  const { dishName, description, ingredients, imageUrl, cookingTime } =
    req.body;
  const newDish = { dishName, description, ingredients, imageUrl, cookingTime };
  dishesData.push(newDish);
  console.log(newDish, dishesData);

  res.redirect("/");
};
