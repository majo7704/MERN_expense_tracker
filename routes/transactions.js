const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require('../controllers/transctions');

//instead to use router.get('/', (req, res) => res.send('HELLO YOU'));
router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router.route('/:_id').delete(deleteTransaction);

module.exports = router;
