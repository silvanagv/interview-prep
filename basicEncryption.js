function encrypt(text, rule) {
  var fullAscii = ''
  for (var i = 0; i <= 255; i++){
    fullAscii += String.fromCharCode(i)
  }

  //for each character in the user-submitted string, we need to shift the character by the number of places defined in the rule. To do this we need to locate each character in our ascii string, and then move it by the appropriate number of places.

  var newString = ''

  for (var i = 0; i < text.length; i++) {
    for (var j = 0; j < fullAscii.length; j++){
      if (text[i] === fullAscii[j]){
        if ((rule+j) <= 256){
          newString += fullAscii[j+rule]
        }
        else if ((rule+j) > 256){
          newString += fullAscii[((j+rule)%256)]
        }
      }
    }
  }


console.log(encrypt("jhuonrnlylwbnrmbrzyvzpsyooyobsyn", 243)) //bcd

/* If the rule and the character position together add up to 256 or greater, then you need to start at the beginning again (modulus 256) */
