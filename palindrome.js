function palindrome(s){
    // let p = ""
    // for(let i = s.length-1; i >= 0; i--){
    //   p+=s[i]
    // }
    // if (p === s){
    //   return true
    // }
    // else {
    //   return false
    // }

    if (s==s.split("").reverse()){
      return true
    }
    else {return false}
}

console.log(palindrome("bg"))
