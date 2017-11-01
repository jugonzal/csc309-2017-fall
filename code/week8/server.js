const express = require('express');

// Initialize express
const app = express();

app.use(express.static('public'))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
