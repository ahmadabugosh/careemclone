const express = require('express');
const routes = require('./routes/routes');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

const app = express();
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/muber');

app.use(bodyParser.json());

routes(app);

module.exports = app;