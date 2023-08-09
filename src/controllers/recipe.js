const Recipe = require("../models/recipe");
const Ingredients = require('../models/ingredients')

exports.getIndex = (req, res, next) => {
  Recipe.findAll({
    include: Ingredients,
  })
    .then((dishesData) => {
      res.render("home", {
        pageTitle: "Homepage - Recipes",
        path: "/",
        dishes: dishesData,
      });
      
      //console.log(Ingredients)
    })
    .catch((err) => console.log(err));
};

exports.getCreateRecipe = (req, res, next) => {
  res.render("create-recipe", {
    pageTitle: "The Recipe Book - Create Recipe",
    path: "/create-recipe",
  });
};

exports.postCreateRecipe = async (req, res, next) => {
  const { dishName, description, ingredientNames, imageUrl, cookingTime } =
    req.body;

    console.log(req.body)

  try {
    const createdRecipe = await Recipe.create({
      dishName,
      description,
      imageUrl,
      cookingTime,
      
    });

    console.log(ingredientNames, 'FLAG FLAG FLAG')

    const ingredientObjects = [];

    for (const ingredientName of ingredientNames) {
      const ingredient = {
        ingredientName,
        recipeId: createdRecipe.id,
      };
      ingredientObjects.push(ingredient);
    }

    // Bulk create the ingredients
    await Ingredients.bulkCreate(ingredientObjects);

    console.log('Recipe added to database');
    return res.redirect('/');
  } catch (error) {
    console.log(error);
    // Handle the error appropriately
  }
};
