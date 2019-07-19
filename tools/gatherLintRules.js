const fs = require('fs');
const path = require('path');
const presets = require('../presets');
const { transferNameToCamel, getActualValue } = require('./utils');
const { fsEmitter } = require('./emitter');

const libRules = [
  { name: 'base', value: 'eslint', config: presets.base },
  { name: 'import', value: 'import', config: presets.import },
  { name: 'jsx-a11y', value: 'jsx-a11y', config: presets['jsx-a11y'] },
  { name: 'react', value: 'react', config: presets.react },
  { name: 'vue', value: 'vue', config: presets.vue }
];

const isJSFile = file => /\.js$/.test(file);

function gatherLintRules() {
  libRules.forEach((item) => {
    const baseUrl = path.join(__dirname, `../rules/${item.value}`);
    const filesObj = {};
    fs.readdir(baseUrl, (error, files) => {
      if (error) throw error;
      // only handle .js files
      const filenames = files.filter(name => isJSFile(name));
      const length = filenames.length;
      filenames.forEach((filename, index) => {
        // change filename type to camel
        const name = transferNameToCamel(filename).substr(1);
        fs.readFile(path.join(baseUrl, filename), 'utf8', (err, file) => {
          filesObj[name] = {};
          const isFinish = Object.keys(filesObj).length === length;
          if (!index) {
            console.log(`updating... gather rule, readdir ${baseUrl}`);
          }
          console.log(`updating... gather rule, readfile ${filename}`);
          if (err) throw err;
          const rules = file.match((/\/\*#?eslint.*?\*\//g));
          rules.forEach(rule => {
            const payloads = rule.match(/\/\*#?eslint(.*?):(.*?)\*\//);
            const regStr = `\\/\\*#?eslint${payloads[1]}:${payloads[2].replace(/([[\]])/, '\\$1')}\\*\\/\n.*->.*`;
            // handle (->) replace rules
            const replactMatch = file.match(new RegExp(regStr));
            const replaceValue = replactMatch ? replactMatch[0].match(/.*->(.*)/) : false;
            if (payloads.length) {
              const key = payloads[1].trim();
              const value = getActualValue((replaceValue ? replaceValue[1] : payloads[2]).trim());
              filesObj[name][key] = value;
            }
          });
          isFinish && writeRuleToFile(item, filesObj);
        });
      });
    });
  });
}

function writeRuleToFile(rule, filesObj) {
  const writePath = path.join(__dirname, `../lib/rules/${rule.name}.js`);
  console.log(`updating... gather finish, write into ${writePath}\n`);
  let str = '/* !!IMPORTANT \n';
  str += '   This file has been automatically generated \n*/\n\n';
  str += 'module.exports = {\n';
  Object.keys(filesObj).forEach(key => {
    const data = filesObj[key];
    str += `${JSON.stringify(data, undefined, 2).replace(/^{/, `  /* #below rules from '${key}'# */`).replace(/\n}$/, ',')}\n`;
  });
  str += '};';
  // replace [pre] flag
  str = str.replace(/"\[pre\](.*)"/g, function(match, p1 = "") {
    return p1.replace(/\\/g, '');
  });
  fs.writeFile(writePath, str, 'utf8', (err) => {
    if (err) throw err;
    outputConfigFile(rule);
  });
}

function outputConfigFile(rule) {
  fs.mkdir(path.join(__dirname, `../lib/configs`), (error) => {
    if (!error) {
      console.log('updating... mkdir config success!');
    }
    const rulesPath = `../rules/${rule.name}`;
    const ruleConfig = rule.config;
    // dynamic cover default configs
    ruleConfig.rules = rulesPath;
    if (rule.value === 'eslint') {
      if (!ruleConfig.parserOptions) ruleConfig.parserOptions = {};
      ruleConfig.parserOptions.ecmaVersion = new Date().getFullYear() - 1;
    }
    const writePath = path.join(__dirname, `../lib/configs/${rule.name}.js`);
    console.log(`updating... output config, write into ${writePath}\n`);
    let str = '/* !!IMPORTANT \n';
    str += '   This file has been automatically generated \n*/\n\n';
    str += 'module.exports = {';
    str += `${JSON.stringify(ruleConfig, undefined, 2).replace(/^{/, ``).replace(/}$/, '')}`;
    str += '};';
    // replace extends path
    const propExtends = ruleConfig.extends;
    propExtends.forEach(item => {
      if (!/^\.\//.test(item)) return;
      str = str.replace(new RegExp(`"${item}"`), `require.resolve("${item}")`);
    });
    // replace rules resolve
    str = str.replace(new RegExp(`"${rulesPath}"`), `require("${rulesPath}")`);
    fs.writeFile(writePath, str, 'utf8', (err) => {
      if (err) throw err;
      outputIndexFile();
    });
  });
}

function outputIndexFile() {
  const writePath = path.join(__dirname, `../lib/index.js`);
  const configs = libRules.reduce((t, c) => {
    return { ...t, [c.name]: `require(./configs/${c.name})` };
  }, {}); 
  let str = '/* !!IMPORTANT \n';
  str += '   This file has been automatically generated \n*/\n\n';
  str += 'module.exports = {';
  str += `${JSON.stringify({ configs }, undefined, 2).replace(/^{/, ``).replace(/}$/, '')}`;
  str += '};';
  // replace useless ""
  str = str.replace(/"require\((.*?)\)"/g, `require("$1")`);
  fs.writeFile(writePath, str, 'utf8', (err) => {
    if (err) throw err;
    fsEmitter.emit('finish');
  });
}

module.exports = gatherLintRules;