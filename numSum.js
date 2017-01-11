function sumNum(n){
  if (n >= 1 && (n*10%10==0))
  {
    sum = 0
    for (i = 1; i <= n; i++){
      sum += i
    }
    return sum
  }
  else {
    return false
  }
}

console.log(sumNum(100))
