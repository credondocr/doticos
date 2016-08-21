const milieu = require('milieu');

const config = milieu('doticos', {
  environment: 'dev',
  server: {
    port: 8080
  },
  mongo: {
    url: 'mongodb://localhost/doticos'
  }
});


module.exports = config;
