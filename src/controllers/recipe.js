const Recipe = require("../models/recipe");

exports.getIndex = (req, res, next) => {
  Recipe.findAll()
    .then((dishesData) => {
      res.render("home", {
        pageTitle: "Homepage - Recipes",
        path: "/",
        dishes: dishesData,
      });
    })
    .catch((err) => console.log(err));
};

exports.getCreateRecipe = (req, res, next) => {
  res.render("create-recipe", {
    pageTitle: "The Recipe Book - Create Recipe",
    path: "/create-recipe",
  });
};

exports.postCreateRecipe = (req, res, next) => {
  const { dishName, description, ingredients, imageUrl, cookingTime } =
    req.body;
  const newDish = { dishName, description, ingredients, imageUrl, cookingTime };
  Recipe.create(newDish)
    .then(() => {
      console.log('Recipe added to database')
      return res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });

};
