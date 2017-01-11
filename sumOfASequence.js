//Make a function that returns the sum of a sequence of integers. The sequence is defined by 3 non-negative values: begin, end, and step. If the begin value is greater than the end, the function should return 0.


function sequenceSum(begin, end, step){
  if (begin > end){
    return 0
  }
  else
  {
    let sum = 0
    console.log(sum)
    for (var i = begin; i <= end; i+= step){
      console.log(i)
      if( end >= i)
      {
        sum += i
      }
    }
    return sum
  }
}

console.log(sequenceSum(2,6,2))
//2, 4, 6
