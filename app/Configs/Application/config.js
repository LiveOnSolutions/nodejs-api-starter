const Env = require('../../Bootstrap/Env');
Env.init();

module.exports = {
  name: process.env.API_NAME || 'server-api',
  env: process.env.NODE_ENV || 'developpement',
  port: process.env.PORT || 8000,
  base_url: process.env.BASE_URL || 'https://someurl.com',
  version: 'v1',
};
