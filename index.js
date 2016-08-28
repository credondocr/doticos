const config = require('./config/config');

const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const scheduler = require('node-schedule')
const helmet     = require('helmet');
const bodyParser = require('body-parser')
const morgan     = require('morgan')
const LeagueController = require('./controllers/league-controller');

const routes = require('./routes')

const port = config.server.port
const app  = express()

require('./libraries/promisify-all')(['mongoose']);

mongoose.connect(config.mongo.url)

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())


app.use('/', routes)

app.listen(port, () => {
  console.log(`Magic happens on port ${port}`)
  scheduler.scheduleJob('*/30 * * * *', function(){
    console.log(new Date(), 'Fetching information');
    LeagueController.fetchLeague(3681)
  });
});
module.exports = app
