const mongoose = require('mongoose');
const { Environment } = require('../../Configs/Environment');

const connection = mongoose.connect(Environment.database.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = { connection, databaseDriver: mongoose };
