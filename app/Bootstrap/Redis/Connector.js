const redis = require('redis');
const { Environment } = require('../../Configs/Environment');

const Redis = redis.createClient(
  Environment.redis.port,
  Environment.redis.host,
);

module.exports = { Redis };
