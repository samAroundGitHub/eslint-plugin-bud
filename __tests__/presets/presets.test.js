const { CLIEngine } = require('eslint');
const path = require('path');
const presets = require('../../lib/index');

describe('presets', () => {
  test('presets是否正常生成', () => {
    expect(typeof presets.configs).toBe('object');
    expect(Object.keys(presets.configs).length > 0).toBe(true);
  });

  test('presets是否可用 - base', () => {
    const engine = new CLIEngine(presets.configs.base);
    const lintReport = engine.executeOnFiles([
      path.join(__dirname, './base/example.js')]
    );
    expect(lintReport.errorCount > 0).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'for-direction') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-var') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-useless-return') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-undef') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-unused-vars') > -1).toBe(true);
  });

  test('presets是否可用 - import', () => {
    const engine = new CLIEngine(presets.configs.import);
    const lintReport = engine.executeOnFiles([
      path.join(__dirname, './base/example.js'),
      path.join(__dirname, './import/example.js')
    ]);
    expect(lintReport.errorCount > 0).toBe(true);
    // base rules
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'for-direction') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-var') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-useless-return') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-undef') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-unused-vars') > -1).toBe(true);
    // import rules
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/newline-after-import') > -1).toBe(true);
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/no-unresolved') > -1).toBe(true);
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/no-duplicates') > -1).toBe(true);
  });

  test('presets是否可用 - jsx', () => {
    const engine = new CLIEngine(presets.configs.jsx);
    const lintReport = engine.executeOnFiles([
      path.join(__dirname, './jsx-a11y/example.js'),
      path.join(__dirname, './jsx-a11y/example.jsx')
    ]);
    expect(lintReport.errorCount > 0).toBe(true);
    // jsx rules
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'jsx-a11y/accessible-emoji') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'jsx-a11y/alt-text') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'jsx-a11y/anchor-is-valid') > -1).toBe(true);
  });
  
  test('presets是否可用 - react', () => {
    const engine = new CLIEngine(presets.configs.react);
    const lintReport = engine.executeOnFiles([
      path.join(__dirname, './base/example.js'),
      path.join(__dirname, './import/example.js'),
      path.join(__dirname, './jsx-a11y/example.js'),
      path.join(__dirname, './jsx-a11y/example.jsx'),
      path.join(__dirname, './react/example.js'),
      path.join(__dirname, './react/example.jsx')
    ]);
    expect(lintReport.errorCount > 0).toBe(true);
    // base rules
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'for-direction') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-var') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-useless-return') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-undef') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-unused-vars') > -1).toBe(true);
    // import rules
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/newline-after-import') > -1).toBe(true);
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/no-unresolved') > -1).toBe(true);
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/no-duplicates') > -1).toBe(true);
    // jsx rules
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'jsx-a11y/accessible-emoji') > -1).toBe(true);
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'jsx-a11y/alt-text') > -1).toBe(true);
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'jsx-a11y/anchor-is-valid') > -1).toBe(true);
    expect(lintReport.results[3].messages.findIndex(item => item.ruleId === 'jsx-a11y/accessible-emoji') > -1).toBe(true);
    expect(lintReport.results[3].messages.findIndex(item => item.ruleId === 'jsx-a11y/alt-text') > -1).toBe(true);
    expect(lintReport.results[3].messages.findIndex(item => item.ruleId === 'jsx-a11y/anchor-is-valid') > -1).toBe(true);
    // react rules
    expect(lintReport.results[4].messages.findIndex(item => item.ruleId === 'react/jsx-key') > -1).toBe(true);
    expect(lintReport.results[4].messages.findIndex(item => item.ruleId === 'react/prefer-stateless-function') > -1).toBe(true);
    expect(lintReport.results[4].messages.findIndex(item => item.ruleId === 'react/no-unknown-property') > -1).toBe(true);
    expect(lintReport.results[5].messages.findIndex(item => item.ruleId === 'react/jsx-key') > -1).toBe(true);
    expect(lintReport.results[5].messages.findIndex(item => item.ruleId === 'react/prefer-stateless-function') > -1).toBe(true);
    expect(lintReport.results[5].messages.findIndex(item => item.ruleId === 'react/no-unknown-property') > -1).toBe(true);
  });

  test('presets是否可用 - vue', () => {
    const engine = new CLIEngine(presets.configs.vue);
    const lintReport = engine.executeOnFiles([
      path.join(__dirname, './base/example.js'),
      path.join(__dirname, './import/example.js'),
      path.join(__dirname, './vue/example.vue'),
    ]);
    expect(lintReport.errorCount > 0).toBe(true);
    // base rules
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'for-direction') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-var') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-useless-return') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-undef') > -1).toBe(true);
    expect(lintReport.results[0].messages.findIndex(item => item.ruleId === 'no-unused-vars') > -1).toBe(true);
    // import rules
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/newline-after-import') > -1).toBe(true);
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/no-unresolved') > -1).toBe(true);
    expect(lintReport.results[1].messages.findIndex(item => item.ruleId === 'import/no-duplicates') > -1).toBe(true);
    // vue rules
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'vue/no-duplicate-attributes') > -1).toBe(true);
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'vue/valid-template-root') > -1).toBe(true);
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'vue/no-unused-components') > -1).toBe(true);
    expect(lintReport.results[2].messages.findIndex(item => item.ruleId === 'vue/require-render-return') > -1).toBe(true);
  });
});