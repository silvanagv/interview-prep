// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++.

// Examples:

 //race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37) => [3, 21, 49]
// Note: you can see some other examples in "Your test cases".


function race(v1, v2, g){
  /*
  g is the lead in feet.

  We want the point where v1 + g = v2
  720 mph + 70 miles = 850 mph

  v1*time + g = v2*time
  -g = v2*time-v1*time
  g = (v2-v1)*time
  time = (v2-v1)/g
  convert decimal hours to hours, minutes, and seconds 
  */
}

console.log(race(720, 850, 70))

console.log(race(80, 91, 37))
