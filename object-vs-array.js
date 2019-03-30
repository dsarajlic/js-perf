var a = [],
  o = {};

for (var i = 0; i < 10000; ++i) {
  a[i] = i;
  o[i] = i
}

var c;

// For within the test-runner -- to run above tests

c = a[ Math.round( Math.random() * a.length ) ];

c = o[ Math.round( Math.random() * a.length ) ];