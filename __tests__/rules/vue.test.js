const rules = require('../../lib/rules/vue');

describe('vue规则', () => {
  test('规则是否存在', () => {
    expect(rules['vue/comment-directive']).toBe('error');
    expect(rules['vue/space-infix-ops']).toBe('off');
    expect(rules['vue/attributes-order']).toBe('off');
    expect(rules['vue/order-in-components']).toBe('off');
  });
});