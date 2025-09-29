const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
  res.send('Remade By MrTomXxX!!');
});

// Start server
app.listen(port, () => {
  console.log(`Your app is listening at http://localhost:${port}`);
});