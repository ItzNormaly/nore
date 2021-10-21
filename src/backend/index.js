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
     bet: parseInt(Math.random() * (99 - 10) + 10)
  
   });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
