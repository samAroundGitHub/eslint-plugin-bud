const rules = require('../../lib/rules/react');

describe('react规则', () => {
  test('规则是否存在', () => {
    expect(rules['react/display-name']).toBe('off');
    expect(rules['react/no-render-return-value']).toBe('error');
    expect(rules['react/no-did-update-set-state']).toBe('error');
  });
});