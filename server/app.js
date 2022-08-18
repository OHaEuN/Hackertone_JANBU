const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { recipeRouter } = require('./routes/recipeRoute');

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use('/recipe', recipeRouter);

mongoose.connect("mongodb://localhost:27017/janbuDB", () => {
  console.log("Successfully connected to mongodb.")
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  }
})

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  materials: {
    type: [String],
    required: true,
  },
  content: String,
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  reviews: String,
})

const Recipe = mongoose.model("Recipe", recipeSchema);

/*--------------------------API--------------------------*/

app.route('/api/recipes')
.get((req, res) => {
  Recipe.find((err, recipes) => {
    if(!err){
      res.send(recipes);
    }else{
      res.send(err);
    }
  });
})
.post((req, res) => {
  var recipe = new Recipe({
    name: req.body.name,
    materials: req.body.materials
  });
  recipe.save((err) => {
    if(!err){
      res.send("Successfully saved");
    }else{
      res.send(err);
    }
  });
});

app.route('/api/recipes/:recipe_id')
.get((req, res) => {
  Recipe.findOne({_id: req.params.recipe_id}, (err, foundRecipe) => {
    if(!err){
      res.json(foundRecipe);
    }else{
      res.send(err);
    }
  });
})
.patch((req, res) => {
  Recipe.updateOne({_id: req.params.recipe_id}, {$set: req.body}, (err) => {
    if(!err){
      res.send("Successfully updated.");
    }else{
      res.send(err);
    }
  })
})
.delete((req, res) => {
  Recipe.deleteOne({_id: req.params.recipe_id}, (err) => {
    if(!err){
      res.send("Successfully deleted.");
    }else{
      res.send(err);
    }
  });
});

app.route('/api/search')
.post((req, res) => {
  Recipe.aggregate([{$match: { materials: { $lte: req.body.materials}}}], (err, foundRecipe) => {
    if(!err){
      res.send(foudnRecipe);
    }else{
      res.send(err);
    }
  });
})

app.listen(process.env.PORT || port, () => {console.log(`Server is running on port ${port}`)});