const fs = require('fs');
async function getModulesManifestLocal() {
  /**
   * @example
   * {
   * "mf-register": {
   *  "remoteEntry": "http://localhost:5001/remoteEntry.js",
   * "exposedModule": "./RegisterModule",
   * "routePath": "",
   * "ngModuleName": "RegisterModule"
   * }
   * }
   */
  return new Promise((resolve, reject) => {
    const MODULES_MANIFEST_URL = '../host/src/assets/modules-manifest-local.json';

    fs.readFile(MODULES_MANIFEST_URL, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}

module.exports = {
  getModulesManifestLocal,
};
