//Express server with CommonJS module syntax
const express = require('express');
//Dot e.n.v used to create global variables for like PORTs or DB URLs
const dotenv = require('dotenv');
//Colors in our console
const colors = require('colors');
//Login
const morgan = require('morgan');

const connectDB = require('./config/db');

//tell dotenv where your config is
dotenv.config({ path: './config/config.env' });

//call the connectDB function
connectDB();

//bring transactions file in
const transactions = require('./routes/transactions');

//initialize express app
const app = express();

//in order to use req.body in addTransaction we need to create a body parser middlewear
app.use(express.json());

//implement morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount the file transactions here
// DELETED ** app.get('/', (req, res) => res.send('Hello YOU'));
app.use('/api/v1/transactions', transactions);

//to access global variable use process.env
const PORT = process.env.PORT || 5000;

//to run the server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
