const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/recipes/', async (req, res, next) => {
  try {
    const result = await db.getRecipes();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get('/api/recipes/:id/shoppingList', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await db.getShoppingList(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get('/api/recipes/:id/instructions', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await db.getInstructions(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error('ERROR:', err);
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
