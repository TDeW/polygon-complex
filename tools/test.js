const { execSync } = require('child_process');

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  });


exec('jest src/__tests__');
