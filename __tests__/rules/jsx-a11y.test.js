const rules = require('../../lib/rules/jsx-a11y');

describe('jsx-a11y规则', () => {
  test('规则是否存在', () => {
    expect(rules['jsx-a11y/accessible-emoji']).toBe('error');
    expect(rules['jsx-a11y/anchor-is-valid']).toBe('error');
  });
});