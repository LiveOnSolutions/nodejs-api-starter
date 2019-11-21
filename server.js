const { App } = require('./app/Bootstrap/app');
const webRoutes = require('./app/src/Http/Routes/web');
const { Environment } = require('./app/Configs/Environment');
const logger = require('./app/src/Providers/Loggger/Logs');

process.on('uncaughtException', error => {
  App.destructServer();
});

/**
 * 'SIGINT' from the terminal is supported on all platforms, and can usually be generated with <Ctrl>+C (though this may be configurable). It is not * generated when terminal raw mode is enabled.
 * **/
process.on('SIGINT', () => {
  App.destructServer();
  logger.warn('SIGINT', () => {
    process.exit(0);
  });
});

process.on('warning', warning => {
  logger.log(warning, () => {
    process.exit(0);
  });
});

App.startServer();
App.listen(Environment.app.port, () => {
  webRoutes(App);
  console.log('%s listening at %s', App.name, App.url);
});
