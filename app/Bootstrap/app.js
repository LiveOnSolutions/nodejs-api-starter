const restify = require('restify');
const restifyPlugins = require('restify').plugins;
const helmet = require('helmet');
const {
  connection,
  databaseDriver,
} = require('../Bootstrap/Mongodb/Connector');

const logger = require('../src/Providers/Loggger/Logs');
const { Environment } = require('../Configs/Environment');

const App = restify.createServer({
  name: Environment.app.name,
  version: Environment.app.version,
});

/**
 * Middleware section
 */
App.use(helmet());
App.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
App.use(restifyPlugins.acceptParser(App.acceptable));
App.use(restifyPlugins.queryParser({ mapParams: true }));
App.use(restifyPlugins.fullResponse());

/**
 * API DOC section
 */
App.get(
  '/',
  restifyPlugins.serveStatic({
    directory: 'app/public',
    default: 'index.html',
  }),
);

App.get(
  '/documentation/api/*',
  restifyPlugins.serveStatic({
    directory: 'app/public',
    default: 'index.html',
  }),
);
App.get(
  '/documentation/server/*',
  restifyPlugins.serveStatic({
    directory: 'app/public',
    default: 'index.html',
  }),
);

const initServer = () => {
  connection
    .then(success => {
      logger.log({
        level: 'debug',
        message: 'Conectado com sucesso no Banco.' + { success },
      });
    })
    .catch(eror => {
      logger.log({
        level: 'debug',
        message: 'Erro ao conectar com o Banco.',
      });
    });
};

const destructServer = () => {
  databaseDriver.connection.close(() => {
    logger.log({
      level: 'info',
      message: 'Conexão com banco de dados encerrada!!!!',
    });
  });
};

App.startServer = initServer;
App.destructServer = destructServer;

module.exports = { App, connection, databaseDriver };
