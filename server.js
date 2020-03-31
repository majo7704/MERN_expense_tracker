// 1
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

// 2
const app = express();

//body parser middlewear in order to use req.body
app.use(express.json());

colors.setTheme({
  silly: ['rainbow', 'bold'],
  input: 'grey',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
const transactions = require('./routes/transactions');

const PORT = process.env.PORT || 5000;

//mount the router after requiring(no mor app.get('/',))
app.use('/api/transactions', transactions);

app.listen(
  PORT,
  console.log(
    ` **** Server RUNNING **** in ${process.env.NODE_ENV} mode on port ${PORT} `
      .silly
  )
);
