const express = require('express');
const path = require('path')
const recipeRoutes = require('./src/routes/recipe')
const errorController = require('./src/controllers/error')

const app = express();
const PORT = process.env.PORT || 8080;

// Set the view engine to EJS
app.set('view engine', 'ejs')
// Set the views folder path
app.set('views', path.join(__dirname, 'src', 'views'));


app.use(recipeRoutes);

app.use(errorController.get404)



// Start the server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));