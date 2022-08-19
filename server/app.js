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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/janbuDB", () => {
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

const tradeSchema = new mongoose.Schema({
  materials: {
    type: Array,
    required: true,
  },
  content: String,
  author: {
    type: String,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  comment: String,
})

const Trade = mongoose.model("Trade", tradeSchema);


/*--------------------------API--------------------------*/
app.route('/')
.get((req, res) => {
  res.send("--Janbu API server--");
})
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
.get((req, res) => {
  Recipe.find({$text: {$search: req.query.kw}}, (err, foundRecipes) => {
    if(!err){
      res.send(foundRecipes);
    }else{
      res.send(err);
    }
  })
})
.post((req, res) => {
  Recipe.aggregate([{$match: { materials: { $lte: req.body.materials}}}], (err, foundRecipes) => {
    if(!err){
      res.send(foundRecipes);
    }else{
      res.send(err);
    }
  });
})

app.route('/api/trades')
.get((req, res) => {
    Trade.find((err, trades) => {
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(trades);
    })
})
.post((req, res) => {
    var trade = new Trade();
    
    // materials 넣기

    trade.content = req.body.content;
    trade.author = req.body.author;
    trade.updated = new Date(req.body.updated_date);

    trade.save((err,trades) => {
      if(err){
        console.error(err);
        res.json({result:0});
        return;
      }
      res.json({result:1});
    })
});

app.route('/api/trade/:material')
.get((req, res) => {
  Trade.findOne({_id: req.params.material}, (err, trade) => {
    if(err) return res.status(500).json({error: err});
    if(!trade) return res.status(404).json({error: 'trade not found'});
    res.json(trade);
  })
});

app.route('/api/trades/:trade_id')
.patch((req, res) => {
  Trade.findOne({_id: req.params.trade_id}, (err, trade) => {
    if(err) return res.status(500).json({error: 'database failure'});
    if(!trade) return res.status(404).json({error: 'trade not found'});

    // materials 수정

    if(req.body.content) trade.content = req.body.content;
    if(req.body.updated) trade.updated = req.body.updated;
    trade.save((err) => {
      if(err) res.status(500).json({error: 'failed to update'});
      res.json({message: 'trade updated'});
    });

  });
})
.delete((req, res) => {
  Trade.remove({_id: req.params.trade_id}, (err, output) => {
    if(err) return res.status(500).json({error: 'database failure'});

    res.status(204).end();
  })
});



app.listen(process.env.PORT || port, () => {console.log(`Server is running on port ${port}`)});