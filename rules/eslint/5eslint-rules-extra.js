/*#eslint no-console: "error"*/
// -> [pre]process.env.NODE_ENV === "production" ? "error" : "off"
// options: { allow: ['log'] }
// !!!区分env作限制
console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");

/*#eslint array-callback-return: "error"*/
// Array.from
// Array.prototype.every
// Array.prototype.filter
// Array.prototype.find
// Array.prototype.findIndex
// Array.prototype.map
// Array.prototype.reduce
// Array.prototype.reduceRight
// Array.prototype.some
// Array.prototype.sort
[].reduce(() => {});
[].map(() => {});
[].forEach(() => {}); // 👌

/*#eslint block-scoped-var: "error"*/
function doIf() {
  if (true) {
      var build = true;
  }
  console.log(build);
}
function doIfElse() {
  if (true) {
      var build = true;
  } else {
      var build = false;
  }
}
function doTryCatch() {
  try {
      var build = 1;
  } catch (e) {
      var f = build;
  }
}

/*#eslint default-case: "error"*/
switch (a) {
  case 1:
      /* code */
      break;
}


/*#eslint max-classes-per-file: "error"*/
// -> off
class A {}
class B {}

/*#eslint no-alert: "error"*/
// -> [pre]process.env.NODE_ENV === "production" ? "error" : "off"
// !!!区分env作限制
alert("here!");
confirm("Are you sure?");
prompt("What's your name?", "John Doe");

/*#eslint no-caller: "error"*/
function foo(n) {
  if (n <= 0) {
      return;
  }
  arguments.callee(n - 1);
}
[1,2,3,4,5].map(function(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});

/*#eslint no-eq-null: "error"*/
if (foo == null) {
  bar();
}
while (qux != null) {
  baz();
}

/*#eslint no-extend-native: ["error", { "exceptions": [] }]*/
Object.prototype.a = "a";

/*#eslint no-implied-eval: "error"*/
setTimeout("alert('Hi!');", 100);

/*#eslint no-param-reassign: "error"*/
function foo(bar) {
  bar = 13;
}
function foo(bar) {
  bar++;
}

/*#eslint no-proto: "error"*/
foo.__proto__;
Object.getPrototypeOf(obj); // 👌

/*#eslint no-return-assign: "error"*/
function doSomething() {
  return foo = bar + 2;
}
function doSomething() {
  return foo += 2;
}

/*#eslint no-shadow: "error"*/
// -|> ["error", { "builtinGlobals": true }]
// options: ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
var a = 3;
function b() {
    var a = 10;
}

/*#eslint no-use-before-define: "off"*/
alert(y);
var y = 10;