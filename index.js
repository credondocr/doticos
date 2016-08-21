const config = require('./config/config');

const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const routes = require('./routes');

const port = process.env.PORT;
const app  = express();

require('./libraries/promisify-all')(['mongoose']);

mongoose.connect(process.env.MONGO_URLl);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());


app.use('/', routes);

app.listen(port, () => { console.log(`Magic happens on port ${port}`); });
module.exports = app;
