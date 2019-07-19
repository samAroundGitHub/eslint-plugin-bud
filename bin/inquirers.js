const inquirer = require('inquirer');

function formatInquirer() {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select the file type you are require.',
      name: 'format',
      choices: ['JavaScript', 'JSON'],
      default: 'JavaScript'
    }
  ]);
}

function presetsInquirer() {
  return inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select the presets you need.',
      name: 'presets',
      choices: ['base', 'import', 'jsx', 'react', 'vue'],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one preset.';
        }
        return true;
      }
    }
  ]);
}

exports.formatInquirer = formatInquirer;
exports.presetsInquirer = presetsInquirer;
