const fs = require('fs');
const chalk = require('chalk');
const { rules, env } = require('./tmp');

function compareVersion(version, wanted) {
  const versions = version.split('.');
  const wanteds = wanted.split('.');
  if (parseInt(versions[0]) < parseInt(wanteds[0])) return false;
  if (parseInt(versions[1]) < parseInt(wanteds[1])) return false;
  if (parseInt(versions[2]) < parseInt(wanteds[2])) return false;
  return true;
}

function checkNodeVersion(wanted, id) {
  const version = process.version;
  if (!compareVersion(version, wanted)) {
    console.log(chalk.red(
      'You are using Node ' + version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ));
    process.exit(1);
  }
}

function loadCommand(command, formatType = 'JavaScript') {
  const EXT = {
    'JavaScript': '.js',
    'JSON': ''
  };
  const PRESETS = {
    'base': 'base',
    'import': 'import',
    'jsx': 'jsx-a11y',
    'react': 'react',
    'vue': 'vue'
  };
  const presets = [].concat(command).map(cmd => `plugin:bud/${PRESETS[cmd]}`);
  const rc = {
    extends: presets,
    rules: rules.stylistic,
    env
  };
  const rulesEnv = rules.env.map(item => `    ${item}`).join('\n');
  let str = `${formatType !== 'JSON' ? 'module.exports = ' : ''}${JSON.stringify(rc, undefined, 2)}`;
  if (formatType !== 'JSON') {
    str = str.replace(/("rules": {\n)/, `$1${rulesEnv}\n`);
    str = str.replace('}\n$', '}') + ';\n';
  }
  writeFile(`./.eslintrc${!EXT[formatType] && formatType !== 'JSON' ? '.js' : EXT[formatType]}`, str);
}

function writeFile(path, content) {
  fs.writeFile(path, content, 'utf8', (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

exports.checkNodeVersion = checkNodeVersion;
exports.loadCommand = loadCommand;