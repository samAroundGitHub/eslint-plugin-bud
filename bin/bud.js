#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const didYouMean = require('didyoumean');
const pkg = require('../package.json');
const { formatInquirer, presetsInquirer } = require('./inquirers');
const { checkNodeVersion, loadCommand } = require('./utils');
const requiredVersion = pkg.engines.node;

// Setting edit distance to 60% of the input string's length
didYouMean.threshold = 0.6;
checkNodeVersion(requiredVersion, 'bin/bud.js');

program
  .version(pkg.version)
  .usage('<command> [options]')
  .command('init')
  .alias('create')
  .option('-f, --format <formatType>', 
    'Set the config file type(oneOf(["JavaScript", "JSON", "YAML"]) you want.(default JavaScript)')
  .option('-p, --preset <presetName>', 'Skip prompts and use <presetName> preset.')
  .option('--base', 'Skip prompts and use base preset.')
  .option('--import', 'Skip prompts and use import preset.')
  .option('--jsx', 'Skip prompts and use jsx preset.')
  .option('--react', 'Skip prompts and use react preset.')
  .option('--vue', 'Skip prompts and use vue preset.')
  .description('create a new eslint config file.')
  .action(
    async (cmd) => {
      const { preset, format } = cmd;
      if (preset === 'vue' || cmd.vue) return loadCommand('vue', format);
      if (preset === 'react' || cmd.react) return loadCommand('react', format);
      if (preset === 'jsx' || cmd.jsx) return loadCommand('jsx', format);
      if (preset === 'import' || cmd.import) return loadCommand('import', format);
      if (preset === 'base' || cmd.base) return loadCommand('base', format);
      if (preset) {
        return console.log(
          chalk.yellow(`error presetName! you should pick preset oneOf ${
            chalk.green('[base, import, jsx, react, vue]')
          }`));
      }
      const presetsResult = preset || await presetsInquirer();
      const formatResult = format || await formatInquirer();
      loadCommand(presetsResult.presets, formatResult.format);
    }
  );

// handle unknown command
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp();
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
    suggestCommands(cmd);
  });

// program exec
program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

function suggestCommands (cmd) {
  const availableCommands = program.commands.map(command => {
    return command._name;
  });

  const suggestion = didYouMean(cmd, availableCommands);
  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`));
  }
}