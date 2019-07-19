const rules = require('../../lib/rules/base');

describe('base规则', () => {
  test('规则是否存在', () => {
    expect(rules['for-direction']).toBe('error');
    expect(rules['no-shadow-restricted-names']).toBe('error');
    expect(rules['no-useless-return']).toBe('error');
  });

  test('满足(->)的规则是否被替换', () => {
    expect(typeof rules['eol-last']).not.toBe('object');
    expect(rules['eol-last']).toBe("off");
    expect(rules['no-unused-vars']).toBe("warn");
    expect(rules['dot-location']).toMatchObject(["error", "property"]);
  });
});