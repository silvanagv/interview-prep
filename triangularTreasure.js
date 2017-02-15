//Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

//You need to return the nth triangular number. You should return 0 for out of range values:

function triangular( n ) {
}

triangular(0) //0
//triangular(1) 1
triangular(2) //3
triangular(3) //6
triangular(-10) //0

//figure out relationship between n and the number of dots required
//make solution using this pattern
//take care of edge cases (negative numbers, 0?)

//need recursive function as to get to n dots you need the number of dots of the preceding number + n

//triangular(4) 10
//triangular(5) 15
