const { getModulesManifestLocal } = require('./utils');
const concurrently = require('concurrently');
const inquirer = require('inquirer');
const path = require('path');

(async () => {
  const modulesManifest = await getModulesManifestLocal();
  const prompt = inquirer.createPromptModule();

  prompt({
    type: 'checkbox',
    name: 'projects',
    message: '¿Qué proyecto deseas correr?',
    choices: [new inquirer.Separator(), ...Object.keys(modulesManifest)],
  }).then(({ projects }) => {
    const modulesToServe = projects.length
      ? projects.map(getModuleLaunchConfig)
      : Object.keys(modulesManifest).map(getModuleLaunchConfig);

    concurrently([
      {
        name: 'Host',
        command: 'ng serve host',
        cwd: path.resolve(__dirname, '../'),
      },
      ...modulesToServe,
    ]);
  });
})();

const getModuleLaunchConfig = project => {
  return {
    name: `${project}`,
    command: `ng serve ${project}`,
    cwd: path.resolve(__dirname, '../'),
  };
};
