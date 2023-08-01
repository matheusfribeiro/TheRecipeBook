const express = require("express")
const recipeController = require('../controllers/recipe')

const router = express.Router()

router.get('/', recipeController.getIndex)

router.get('/create-recipe', recipeController.getCreateRecipe)

router.post('/create-recipe', recipeController.postCreateRecipe)

module.exports = router