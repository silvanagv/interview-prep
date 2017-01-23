function sum(){
  var total = 0
  for (i=0;i<arguments.length;i++){
    total +=arguments[i]
  }
  return total
}

// Should equal 15
console.log(sum(1, 2, 3, 4, 5));

// Should equal 0
sum(5, null, -5);

// Should equal 10
sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1);

// Should equal 0.3, not 0.30000000000000004
sum(0.1, 0.2);
