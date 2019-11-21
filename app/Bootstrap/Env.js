const dotenv = require('dotenv');

module.exports.init = (environment = 'developpement') => {
  let environmentVariabels = {};
  if (environment === 'production') {
    environmentVariabels = dotenv.config({ path: '.env' });
  }
  if (environment === 'staging') {
    environmentVariabels = dotenv.config({ path: '.env.staging' });
  }
  if (environment === 'developpement') {
    environmentVariabels = dotenv.config({ path: '.env.development' });
  }
  for (const k in environmentVariabels) {
    process.env[k] = environmentVariabels[k];
  }
};
