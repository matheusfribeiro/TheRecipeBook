const express = require('express');
const path = require('path')

const db = require('./src/utils/database')
const Recipe = require('./src/models/recipe')
const Ingredients = require('./src/models/ingredients')

const recipeRoutes = require('./src/routes/recipe')
const errorController = require('./src/controllers/error')

const app = express();
const PORT = process.env.PORT || 8080;

// Set the view engine to EJS
app.set('view engine', 'ejs')
// Set the views folder path
app.set('views', path.join(__dirname, 'src', 'views'));


// Set the static folder to serve CSS, JS, and other static files
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Set server to receive data via POST - form
app.use(express.urlencoded({ extended: true }))

app.use(recipeRoutes);

app.use(errorController.get404)

Recipe.hasMany(Ingredients)

db
  .sync()
  //.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  })



