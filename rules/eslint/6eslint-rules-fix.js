/*#eslint no-extra-boolean-cast: "error"*/
var bar = true;
var foo = !!!bar;
if (!!foo) {}
while (!!foo) {}

/*#eslint no-extra-semi: "error"*/
var x = 5;;
function foo() {
    // code
};

/*#eslint no-regex-spaces: "error"*/
var re = /foo   bar/;
var re = new RegExp("foo   bar");

/*#eslint no-unsafe-negation: "error"*/
if (!key in object) {}
if (!obj instanceof Ctor) {}

/*#eslint require-atomic-updates: error */

/*#eslint use-isnan: "error"*/
if (foo == NaN) {}
if (foo != NaN) {}

/*#eslint valid-typeof: "error"*/
typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"

/*#eslint no-div-regex: "error"*/
function bar() { return /=foo/; }

/*#eslint no-else-return: "error"*/
() => {
  if (x) {
      return y;
  } else {
      return z;
  }
}

/*#eslint no-empty-pattern: "error"*/
var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}

/*#eslint no-extra-bind: "error"*/
var x = function () {
  foo();
}.bind(bar);
var x = (() => {
  foo();
}).bind(bar);
var x = (() => {
  this.foo();
}).bind(bar);
var x = function () {
  (function () {
    this.foo();
  }());
}.bind(bar);
var x = function () {
  function foo() {
    this.bar();
  }
}.bind(baz);

/*#eslint no-extra-label: "error"*/
A: while (a) {
  break A;
}

/*#eslint no-floating-decimal: "error"*/
var num = .5;
var num = 2.;
var num = -.7;

/*#eslint no-multi-spaces: "error"*/
var a =  1;
if(foo   === "bar") {}
a <<  b
var arr = [1,  2];
a ?  b: c

/*#eslint no-unused-labels: "error"*/
A: var foo = 0;
B: {
    foo();
}
C:
for (let i = 0; i < 10; ++i) {
    foo();
}

/*#eslint no-useless-return: "error" */
function foo1() { return; }
function foo2() {
  doSomething();
  return;
}