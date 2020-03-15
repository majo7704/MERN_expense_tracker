// ****** methods that will use the model to interact with DB ******

// @description   get ALL transactions
// @route         GET /api/v1/transactions
// @access        Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

// @desc          ADD a transaction
// @route         POST /api/v1/transactions/
// @access        Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction');
};

// @desc          DELETE a transaction
// @route         DELETE /api/v1/transactions/:id
// @access        Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
};
