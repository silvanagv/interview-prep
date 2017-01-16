// recursion involves calling a function on itself to substitute usually for some kind of loop until the value passed in meets some criterion.

//string reversal

function reverseIt(string){
  var revString = ""

   for (var i = (string.length-1); i > 0; i--) {
     revString += string[i]
   }
   return revString
}

console.log(reverseIt("hello"))

//rewrite recursively

// https://medium.com/@kevincennis/recursion-in-javascript-1608032c7a1f#.jnmfpvswt
