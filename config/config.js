const milieu = require('milieu');
const dotenv = require('dotenv')
dotenv.config({silent: true})
const config = milieu('doticos', {
  environment: 'dev',
  server: {
    port: process.env.PORT
  },
  mongo: {
    url: process.env.MONGO_URL
  },
  api: {
    steam_api_key: process.env.STEAM_API_KEY
  },
  redis:{
    url: process.env.REDIS_URL
  }
});


module.exports = config;
