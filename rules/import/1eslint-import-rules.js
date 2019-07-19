// static analysis

/*eslint import/no-unresolved: ['error', { commonjs: true, caseSensitive: true }]*/
import '../index2';
require('../index2');

/*eslint import/named: 'error'*/
import { a, b, a2 } from '../index';

/*eslint import/default: 'error'*/
import foo from '../index';

/*eslint import/namespace: 'off'*/

// helpful warning

/*eslint import/export: 'error'*/

/*eslint import/no-named-as-default: 'error'*/

/*eslint import/no-duplicates: 'error'*/

/*eslint import/no-named-default: 'error'*/

/*eslint import/newline-after-import: 'error'*/

/*eslint import/order: ['error', { groups: [['builtin', 'external', 'internal']] }]*/
