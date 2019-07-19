/*#eslint block-spacing: ["error", "always"]*/
function foo() {return true;}
if (foo) { bar = 0;}
function baz() {let i = 0;
    return i;
}

/*#eslint brace-style: "error"*/
function foo3()
{
  return true;
}
if (foo)
{
  bar();
}
try
{
  somethingRisky();
} catch(e)
{
  handleError();
}
if (foo) {
  bar();
}
else {
  baz();
}

/*#eslint comma-dangle: ["error", "never"]*/
// -> "off"
var foo = {
  bar: "baz",
  qux: "quux",
};

/*#eslint comma-spacing: ["error", { "before": false, "after": true }]*/
var foo = 1 ,bar = 2;

/*#eslint computed-property-spacing: ["error", "never"]*/
obj[foo ]
obj[ 'foo']
var x = {[ b ]: a}
obj[foo[ bar ]]

/*#eslint eol-last: ["error", "always"]*/
// -> "off"
function doSmth() {
  var foo = 2;
}

/*#eslint func-call-spacing: ["error", "never"]*/
fn ();
fn
();

/*#eslint implicit-arrow-linebreak: ["error", "beside"] */
(foo) =>
  bar;
(foo) =>
  (bar);
(foo) =>
(
  bar()
);

/*#eslint indent: "error"*/
// -> ["error", 2, { "SwitchCase": 1 }]
/* options: {
  { "SwitchCase": 0 },
  { "VariableDeclarator": 1 },
  { "outerIIFEBody": 1 },
  { "MemberExpression": 1 },
  { "FunctionDeclaration": { "parameters": 1, "body": 1 } },
  { "FunctionExpression": { "parameters": 1, "body": 1 } },
  { "CallExpression": { "arguments": 1 } },
  { "ArrayExpression": 1 },
  { "ObjectExpression": 1 },
  { "ImportDeclaration": 1 },
  { "flatTernaryExpressions": true },
  { "ignoreComments": false }
} 
*/
switch(a){
  case "a":
      break;
  case "b":
      break;
  }

/*#eslint jsx-quotes: ["error", "prefer-double"]*/
// <a b="c" /> // 👌
// <a b='"' /> // 👌

/*#eslint key-spacing: "error"*/
// options: { "beforeColon": false, "afterColon": true, "mode": "strict" }
// var obj = { "foo": 42 }; // 👌

/*#eslint keyword-spacing: ["error", { "before": true, "after": true }]*/
/*
  if (foo) {
      //...
  } else if (bar) {
      //...
  } else {
      //...
  }
  // 👌
*/

/*#eslint linebreak-style: ["error", "unix"]*/

/*#eslint no-undef: "error"*/
var a = someFunction();
b = 10;

/*#eslint max-depth: ["error", 4]*/
/*#eslint max-len: ["error", { "code": 120 }]*/
/*#eslint new-parens: "error"*/
var person = new Person;
var person = new (Person);

/*eslint no-unneeded-ternary: "error"*/
// -> ["error", { "defaultAssignment": false }]
bar ? bar : 1;

/*#eslint no-whitespace-before-property: "error"*/
foo. a;

/*#eslint object-curly-spacing: ["error", "never"]*/
// -> "off"

/*#eslint quotes: "error"*/
// -> ["error", "single"]
// options: ["double", "single", "backticks"]
var single = 'single';

/*#eslint semi: ["error", "always"]*/
foo

/*#eslint semi-spacing: ["error", { "before": false, "after": true }]*/
// options: {"before": false, "after": true}
var a ;var b;

/*#eslint semi-style: ["error", "last"]*/
foo()
;var a = 'a';

/*#eslint space-before-blocks: "error"*/
// options { "functions": "always", "keywords": "always", "classes": "always" }
if (a){
  b();
}
function a(){}

/*#eslint space-in-parens: ["error", "never"]*/
foo( {a: 'a'} )