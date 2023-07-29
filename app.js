const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});



// Start the server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));