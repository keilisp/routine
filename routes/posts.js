const express = require('express');
const router = express.Router();

/* get posts index /posts  */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts')
})

/* get posts new /posts/new  */
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new')
})

/* post posts create /posts  */
router.post('/:id', (req, res, next) => {
  res.send('CREATE /posts/:id')
})

/* get posts show /posts/:id  */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id')
})

/* get posts edit /posts/:id/edit  */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit')
})

/* put posts update /posts/:id  */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id')
})

/* delete posts destroy /posts/:id  */
router.delete('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id')
})

module.exports = router;