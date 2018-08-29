const { execSync } = require('child_process');

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  });


exec('babel src -d . --ignore __tests__', { BABEL_ENV: 'cjs' });
exec('babel src -d es --ignore __tests__', { BABEL_ENV: 'es' });
