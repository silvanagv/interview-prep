// 1. check if each item is in any item of the other array as a substring
// 2. If it is, push it into a new array
// 3. Sort the new array alphabetically
// 4. Check for duplicates
// 5. If no matches, return empty array
// Edge cases?

function inArray(array1,array2){


  var bigArray = array2
  var littleArray = array1
  var matchingArray = []

  //1. need nested loop

  for (let i = 0; i < bigArray.length; i++ ){
    for (let j = 0; j < littleArray.length; j++){
      if (bigArray[i].includes(littleArray[j])){
        matchingArray.push(littleArray[j])
      }
    }
  }

var nonDupeArray = []
  //3. Sort the new array alphabetically


  //4. Check for duplicates

  for (let k = 0; k < matchingArray.length-1; k++){
    for (let l = 1; l < matchingArray.length; l++){
      if (matchingArray[k] === matchingArray[l]){
        //remove item from array
        matchingArray.splice(k, 1)
        k = 0
        l = 1
        console.log("It's a match!")
      }
    }
  }

  return matchingArray
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["live", "strong"]

console.log(inArray(a1,a2))

// a1 = ["xyz", "live", "strong"] // ["live", "strong"]
//
// a1 = ["tarp", "mice", "bull"] // []
