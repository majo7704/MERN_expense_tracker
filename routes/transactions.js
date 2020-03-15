const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require('../controllers/transaction_controller');

// DELETED ** router.get('/', (req, res) => res.send('Hello from router'));
//instead
router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
