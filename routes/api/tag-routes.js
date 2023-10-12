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
    res.status(400);
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
    if (!tag) {
      res.status(404).json({message: 'No tag found with this id'});
      return; 
    }
    res.json(tag);
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((tag) => {
    res.json(tag);
  }).catch((err) => {
    console.log(err);
    res.status(400);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
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
    res.status(500);
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
    console.log('Connection Error -> ', err);
    res.status(500).json(err);
  })
});

module.exports = router;
