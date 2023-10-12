const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ }).then((results) => {
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
  // create a new category
  Category.create(req.body).then((category) => {
    res.json(category);
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
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
