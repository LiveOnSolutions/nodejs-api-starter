const database = require('../Configs/Database/config');
const app = require('../Configs/Application/config');
const redis = require('../Configs/Redis/config');
module.exports.Environment = {
  database,
  app,
  redis,
};
