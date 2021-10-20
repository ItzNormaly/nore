const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to backend!');
});

app.post('/bet', (req, res) => {
  res.json({
     number: parseInt(Math.random() * (9999 - 1000) + 1000)
  
   });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
