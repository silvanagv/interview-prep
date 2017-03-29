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

    // if (s==s.split("").reverse().join("")){
    //   return true
    // }
    // else {return false}
    return s==s.split().reverse().join("") ? true:false;
}

console.log(palindrome("otto"))
