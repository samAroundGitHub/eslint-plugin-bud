/*#eslint no-constant-condition: "error"*/
// -> "off"
if (true) {}

/*#eslint no-debugger: "error"*/
// -> [pre]process.env.NODE_ENV === "production" ? "error" : "off"
// !!!区分env作限制 adjust
function isTruthy(x) {
  debugger;
  return Boolean(x);
}

/*#eslint no-unreachable: "error"*/
// -> [pre]process.env.NODE_ENV === "production" ? "error" : "off"
// !!!区分env作限制
function foo() {
  return true;
  console.log("done");
}

/*#eslint curly: ["error", "all"]*/
// -> "off"
// options: ['all', 'multi', 'multi-line', 'multi-or-nest', ['multi', 'consistent']]
if (true) this.a = '1';
if (true) {
  this.a = 'a'
} else this.b = 'b';
if (true) this.a = 'a';
else this.b = 'b';

/*#eslint no-implicit-coercion: "error"*/
// -> "off"
var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;
var s = "" + foo;
foo += ``;

/*#eslint no-useless-catch: "error"*/
// -> "off"
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
} finally {
  cleanUp();
}

/*#eslint wrap-iife: ["error", "outside"]*/
// -> ["error", "inside"]
// options: ["outside", "inside", "any", [{ "functionPrototypeMethods": false }]]
var x = (function () { return { y: 1 };})();
var x = (function () { return { y: 1 };}());
var x = ((function () { return { y: 1 };})());

/*#eslint strict: ["error", "global"]*/
// -> "off"

/*#eslint no-unused-vars: "warn"*/
// -> "warn"
var a = 1;

/*#eslint dot-location: ["error", "object"]*/
// -> ["error", "property"]
// options: ["object", "property"]
var a = object
.property;