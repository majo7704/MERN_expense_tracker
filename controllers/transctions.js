//all of the methods that will use the model to interact with db

//@desc Get all transactions
//@route GET /api/transactions
//@access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

//@desc Add a transaction
//@route POST /api/transactions
//@access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction');
};

//@desc Delete transaction
//@route DELETE /api/transactions/:_id
//@access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
};
