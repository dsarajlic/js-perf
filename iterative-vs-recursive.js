  var fib1 = function fib1(n) {
      if(n === 0 || n === 1) {
          return 1;
      }
  
      return fib1(n-1) + fib1(n-2);
  };
  
  var fib2 = function fib1(n) {
      if(n === 0 || n === 1) {
          return 1;
      }
  
      var first = 1,
          second = 1,
          acc = 0;
  
      for(var i = 2; i <= n; i++) {
          acc = first + second;
          first = second;
          second = acc;
      }
  
      return acc;
  };

fib1(10);
fib2(10);
