/*#eslint for-direction: "error"*/
for (var i = 0; i < 10; i--) {
}
for (var i = 10; i >= 0; i++) {
}

/*#eslint getter-return: "error"*/
p = {
  get name() {
    // no returns.
  }
};
Object.defineProperty(p, "age", {
  get: function () {
    // no returns.
  }
});
class P {
  get name() {
    // no returns.
  }
}

/*#eslint no-async-promise-executor: "error"*/
const foo = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function (err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});

/*#eslint no-compare-neg-zero: "error"*/
if (x === -0) {
  // doSomething()...
}

/*#eslint no-cond-assign: "error"*/
// options: ["except-parens", "always"]
// Unintentional assignment
var x;
if (x = 0) {
  var b = 1;
}

// Control characters are special, invisible characters in the ASCII range 0-31. 
// These characters are rarely used in JavaScript strings 
// so a regular expression containing these characters is most likely a mistake.
/*#eslint no-control-regex: "error"*/
var pattern1 = /\x1f/;
var pattern2 = new RegExp("\x1f");

/*#eslint no-dupe-args: "error"*/
function foo0(a, b, a) {
  console.log("value of the second a:", a);
}
var bar = function (a, b, a) {
  console.log("value of the second a:", a);
};

/*#eslint no-dupe-keys: "error"*/
var foo1 = {
  bar: "baz",
  bar: "qux"
};
var foo2 = {
  "bar": "baz",
  bar: "qux"
};
var foo3 = {
  0x1: "baz",
  1: "qux"
};

/*#eslint no-duplicate-case: "error"*/
switch (1) {
  case 1:
    break;
  case 2:
    break;
  case 1:         // duplicate test expression
    break;
  default:
    break;
}

/*#eslint no-empty: "error"*/
// options: { "allowEmptyCatch": true }
if (foo) {}
while (foo) {}
switch (foo) {}
try {
} catch (ex) {
} finally {
}

/*#eslint no-empty-character-class: "error"*/
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null

/*#eslint no-ex-assign: "error"*/
try {
  // code
} catch (e) {
  e = 10;
}

/*#eslint no-func-assign: "error"*/
function fn1() {}
fn1 = 1;

function fn2() {
  fn2 = bar;
}

/*#eslint no-inner-declarations: "error"*/
// options: ["functions", "both"]
if (true) {
  var x = 0;
}
function fn1() {
  if (true) {
    var x = 123;
    function fn2() {}
  }
}

/*#eslint no-invalid-regexp: "error"*/
RegExp('[')
RegExp('.', 'z')
new RegExp('\\')

/*#eslint no-irregular-whitespace: "error"*/
// https://eslint.org/docs/rules/no-irregular-whitespace

/*#eslint no-misleading-character-class: error */
// This rule reports the regular expressions
// which include multiple code point characters in character class syntax.
// /^[👍]$/.test("👍") //→ false
// /^[👍]$/u.test("👍") //→ true

/*#eslint no-obj-calls: "error"*/
var math = Math();
var json = JSON();
var reflect = Reflect();

/*#eslint no-prototype-builtins: "error"*/
var hasBarProperty = foo.hasOwnProperty("bar");
var isPrototypeOfBar = foo.isPrototypeOf(bar);
var barIsEnumerable = foo.propertyIsEnumerable("bar");

/*#eslint no-sparse-arrays: "error"*/
var items = [,];
var colors = [ "red",, "blue" ];

/*#eslint no-unexpected-multiline: "error"*/
var a = b
(1 || 2).baz();

/*#eslint no-unsafe-finally: "error"*/
let finalFn = function() {
  try {
      return 1;
  } catch(err) {
      return 2;
  } finally {
      return 3;
  }
};

/*#eslint eqeqeq: ["error", "always"]*/
// options: [["always", {"null": "ignore"}], "smart"]
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

/*#eslint no-case-declarations: "error"*/
switch (foo) {
  case 1:
      let x = 1;
      break;
  case 2:
      const y = 2;
      break;
  case 3:
      function f() {}
      break;
  default:
      class C {}
}

/*#eslint no-empty-function: ["error", { "allow": [] }]*/
// "functions" - Normal functions.
// "arrowFunctions" - Arrow functions.
// "generatorFunctions" - Generator functions.
// "methods" - Class methods and method shorthands of object literals.
// "generatorMethods" - Class methods and method shorthands of object literals with generator.
// "getters" - Getters.
// "setters" - Setters.
// "constructors" - Class constructors.
function a() {}
var b = function() {};
var obj = {
    foo: function() {}
};
() => {};

/*#eslint no-fallthrough: "error"*/
switch(foo) {
  case 1:
      doSomething();
  case 2:
      doSomething();
}

/*#eslint no-global-assign: "error"*/
// options: {"exceptions": ["Object"]}
Object = null
undefined = 1

/*#eslint no-octal: "error"*/
var num = 071;
var num2 = 5 + 07;

/*#eslint no-redeclare: "error"*/
var a1 = 3;
var a1 = 10;

/*#eslint no-self-assign: "error"*/
foo = foo;
[a, b] = [a, b];
[a, ...b] = [x, ...b];
({a, b} = {a, x});

/*#eslint no-useless-escape: "error"*/
"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;

/*#eslint no-with: "error"*/
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}

/*#eslint yoda: "error"*/
// https://eslint.org/docs/rules/yoda
if (true == flag) {
  // ...
}
if (5 > count) {
  // ...
}

/*#eslint no-delete-var: "error"*/
// The purpose of the delete operator is to remove a property from an object.
// Using the delete operator on a variable might lead to unexpected behavior.
var x;
delete x;

/*#eslint no-shadow-restricted-names: "error"*/
// https://eslint.org/docs/rules/no-shadow-restricted-names