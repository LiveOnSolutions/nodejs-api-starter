const Env = require('../../Bootstrap/Env');
Env.init();

module.exports = {
  host: process.env.REDIS_HOST || 'redis_node',
  port: process.env.REDIS_PORT || 6379,
};
