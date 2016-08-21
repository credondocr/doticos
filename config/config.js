const milieu = require('milieu');
const dotenv = require('dotenv')
dotenv.config()
const config = milieu('doticos', {
  environment: 'dev',
  server: {
    port: process.env.PORT
  },
  mongo: {
    url: process.env.MONGO_URL
  },
  api: {
    dota_api_key: process.env.DOTA_API_KEY
  },
  redis:{
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});


module.exports = config;
