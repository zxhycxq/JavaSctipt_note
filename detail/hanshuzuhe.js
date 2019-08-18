var toUpperCase = function (x) {
  return x.toUpperCase ();
};

var hello = function (x) {
  return 'hello, ' + x;
}

var greet = function (x) {
  return hello (toUpperCase (x))
}

greet ('eric')

function compose(f, g) {
  return function (x) {
    return f (g (x))
  }
}


var foo = {
  value: 1,
  bar: function () {
    console.log (this.value);
  }
}
foo.bar ()

Function.prototype.call2 = function (context) {
  context.fn = this;
  context.fn ();
  delete context.fn;
}

var foo = {value: 1}

function bar() {
  console.log (this.value)
}

bar.call2 (foo);//1


var foo = {value: 2}

function bar(name, age) {
  console.log (name);
  console.log (age);
  console.log (this.value);
}

bar.call (foo, 'eric', 18)
