const rules = require('../../lib/rules/import');

describe('import规则', () => {
  test('规则是否存在', () => {
    expect(rules['import/no-unresolved']).toMatchObject(['error', { commonjs: true, caseSensitive: true }]);
    expect(rules['import/order']).toMatchObject(['error', { groups: [['builtin', 'external', 'internal']] }]);
  });
});