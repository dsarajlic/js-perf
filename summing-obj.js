var sample = {
  a: 1, 
  b: 2,
  c: 3
};

function sum1(obj) {
  var sum = 0;
  for (var el in obj) {
    if (obj.hasOwnProperty(el)) {
      sum += parseFloat(obj[el]);
    }
  }
  return sum; 
}

function sum2(obj) {
  return Object.keys(obj)
    .reduce(function (sum, key) {
      return sum + parseFloat(obj[key]);
    }, 0);
}

// For within the test-runner -- to run above tests
sum1( sample );
sum2( sample );
