const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  }).then((results) => {
    res.json(results);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include: [Product]
  }).then((tag) => {
    if (!tag) { // if there is no tag associated with the id, return a 404 error
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    res.json(tag);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag

  Tag.create(req.body).then((tag) => {
    res.json(tag);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Tag.update(req.body, {
    where:{
      id: req.params.id
    }
  }).then((tag) => {
    if (!tag[0]) { // in the put route, tag is an object, either [1] (successful) or [0] (unsuccessful). tag[0] is the value of the first element of the array, which is either the number 1 or 0. extracting the number from the array makes the if condition valid and allows us to check if the update was successful.
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    res.json(tag);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete one tag by its `id` value
  Tag.destroy({
    where:{
      id: req.params.id
    }
  }).then((tag) => {
    if (!tag) {
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    res.json(tag);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

module.exports = router;
