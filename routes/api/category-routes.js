const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((results) => {
    res.json(results);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((category) => {
    if (!category) {
      res.status(404).json({message: 'No category found with this id'});
      return; 
    }
    res.json(category)
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

router.post('/', (req, res) => {
  if (typeof req.body.category_name === 'object') {
    res.status(400).json({message: "category_name cannot be an array or object"});
  }
  if (!req.body.category_name) {
    res.status(400).json({message: "Please provide a category name and format it this way (without the backslashes): {\"category_name\": \"(insert category name here)\"}. The first component must be a string with double quotes, and the second component cannot be an array or object."});
    return;
  }
  Category.create(req.body).then((category) => {
    res.json(category);
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  if (typeof req.body.category_name === 'object') {
    res.status(400).json({message: "category_name cannot be an array or object"});
  }
  if (!req.body.category_name) {
    res.status(400).json({message: "Please provide a category name and format it this way (without the backslashes): {\"category_name\": \"(insert category name here)\"}. The first component must be a string with double quotes, and the second component cannot be an array or object."});
    return;
  }
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then((category) => {
    if (!category[0]) { // category is an object, either [1] (successful) or [0] (unsuccessful). category[0] is the value of the first element in the array, which is either the number 1 or 0. extracting the number from the array makes the if condition valid and allows us to check if the update was successful or not.
      console.log('wow')
      res.status(404).json({message: 'No category found with this id'});
      return; 
    }
    res.json(category);
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { 
      id: req.params.id
    }
  }).then((category) => {
    if (!category) {
      res.status(404).json({message: 'No category found with this id'});
      return; 
    }
    res.json(category);
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

module.exports = router;
