/* eslint-disable no-console */
require('colors');
const { exec } = require('child_process');

const componentName = process.argv[2];

if (!componentName) {
  console.log('Please specify pkg name'.red);
}

const pkgs = [
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'eslint-config-airbnb',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
];

pkgs.forEach((pkg) => {
  console.log(`install package: ${pkg} to ${componentName}`);
  exec(`lerna add ${pkg} -D --scope=${componentName}`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.error(err);
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});
