/*#eslint constructor-super: "error"*/
class A extends null {
  constructor() {
    super();  // Would throw a TypeError.
  }
}

/*#eslint no-class-assign: "error"*/
class AA { }
AA = 0;

/*#eslint no-const-assign: "error"*/
const aa = 0;
++aa;

/*#eslint no-dupe-class-members: "error"*/
class Foo {
  bar() { }
  bar() { }
}

/*#eslint arrow-spacing: "error"*/
()=>{}

/*#eslint generator-star-spacing: ["error", {"before": true, "after": false}]*/
function *generator() {} // 👌
var anonymous = function *() {}; // 👌
var shorthand = { *generator() {} }; // 👌

/*#eslint no-duplicate-imports: "error"*/
import { merge } from 'module';
import { find } from 'module';

/*#eslint no-new-symbol: "error"*/
var foo = new Symbol('foo');

/*#eslint no-this-before-super: "error"*/
class AAA extends B {
  constructor() {
      this.a = 0;
      super();
  }
}

/*#eslint no-useless-constructor: "error"*/
class Q {
  constructor () {
  }
}
class W extends B {
  constructor (...args) {
    super(...args);
  }
}

/*#eslint no-useless-rename: "error"*/
import { foo4 as foo4 } from "bar";
let { foo5: foo5 } = bar;
function foo6({ bar: bar }) {}
({ foo7: foo7 }) => {}

/*#eslint no-var: "error"*/
var x = "y";
var CONFIG = {};

/*#eslint prefer-rest-params: "error"*/
function test() {
  foo(arguments);
}

/*#eslint require-yield: "error"*/
function* asd() {
  return 10;
}

/*#eslint rest-spread-spacing: ["error", "never"]*/
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { xx, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };