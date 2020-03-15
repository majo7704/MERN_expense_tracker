//Express server with CommonJS module syntax
const express = require('express');
//Dot e.n.v used to create global variables for like PORTs or DB URLs
const dotenv = require('dotenv');
//Colors in our console
const colors = require('colors');
//Login
const morgan = require('morgan');

//tell dotenv where your config is
dotenv.config({ path: './config/config.env' });

//initialize express app
const app = express();

app.get('/', (req, res) => res.send('Hello YOU'));

//to access global variable use process.env
const PORT = process.env.PORT || 5000;

//to run the server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
