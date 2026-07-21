const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
}
);

app.get('/recipe', (req, res) => {
  res.render('recipe');
});

app.get('/nutrition', (req, res) => {
  res.render('nutrition');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});