for (var i = 0; i < 10; i--) {
}
for (var i = 10; i >= 0; i++) {
}

function foo1() { return; }
function foo2() {
  doSomething();
  return;
}

console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");

const a = () => {};