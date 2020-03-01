const express = require('express');
const router = express.Router({
  mergeParams: true
});

/* get reviews index /posts/:id/reviews  */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/:id/reviews')
})

/* post reviews create /posts/:id/reviews/:review_id  */
router.post('/:id', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews/:review_id')
})

/* get reviews show /posts/:id/reviews/:review_id  */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id/reviews/:review_id')
})

/* get reviews edit /posts/:id/reviews/:review_id/edit  */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit')
})

/* put reviews update /posts/:id/reviews/:review_id  */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id')
})

/* delete reviews destroy /posts/:id/reviews/:review_id  */
router.delete('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id')
})

module.exports = router;