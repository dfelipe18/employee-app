const { getModulesManifestLocal } = require('./utils');
const concurrently = require('concurrently');
const inquirer = require('inquirer');
const path = require('path');

(async () => {
  const modulesManifest = await getModulesManifestLocal();
  const prompt = inquirer.createPromptModule();
  const modules = ['host', ...Object.keys(modulesManifest)];

  prompt({
    type: 'checkbox',
    name: 'projects',
    message: '¿Qué pruebas deseas correr?',
    choices: [new inquirer.Separator(), ...modules],
  }).then(({ projects }) => {
    const modulesToTest = projects.length
      ? projects.map(getModuleTestConfig)
      : modules.map(getModuleTestConfig);

    concurrently(modulesToTest);
  });
})();

function getModuleTestConfig(project) {
  return {
    name: `Testing: ${project}`,
    command: `jest --coverage --rootDir='${project}'`,
    cwd: path.resolve(__dirname, '../'),
  };
}
