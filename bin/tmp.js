const fs = require('fs');
const path = require('path');
const base = require('../lib/configs/base.js');
const baseRules = base.rules;
const baseEnv = base.env;

const gatherRules = () => {
  const str = { env: [], stylistic: {} };
  const baseRulesPath = path.join(__dirname, '../lib/rules/base.js');
  const text = fs.readFileSync(baseRulesPath, 'utf8');
  str.env.push(text.match(/"no-debugger":.*/)[0]);
  str.env.push(text.match(/"no-unreachable":.*/)[0]);
  str.env.push(text.match(/"no-console":.*/)[0]);
  str.env.push(text.match(/"no-alert":.*/)[0]);
  str.stylistic.indent = baseRules.indent;
  str.stylistic.semi = baseRules.semi;
  str.stylistic.quotes = baseRules.quotes;
  return str;
};

const rules = gatherRules();

exports.rules = rules;
exports.env = baseEnv;