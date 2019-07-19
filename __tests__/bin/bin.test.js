const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('bin', () => {
  test('移除eslint config file', () => {
    const mockErr = jest.fn();
    try {
      if (fs.existsSync(path.join(__dirname, './.eslintrc.js'))) {
        execSync(`rm ${path.join(__dirname, './.eslintrc.js')}`);
        expect(fs.existsSync(path.join(__dirname, './.eslintrc.js'))).toBe(false);
      }
    } catch (err) {
      console.error(err);
      mockErr();
    }
    expect(mockErr).not.toBeCalled();
  });
  test('脚本正常运行', () => {
    const mockErr = jest.fn();
    try {
      execSync(`cd ${__dirname} && node ../../bin/bud.js init --react`);
    } catch (err) {
      console.error(err);
      mockErr();
    }
    expect(mockErr).not.toBeCalled();
  });
  test('重新生成eslint config file', () => {
    const eslint = require(path.join(__dirname, './.eslintrc'));
    expect(eslint.extends).toMatchObject([ "plugin:bud/react" ]);
  });
});