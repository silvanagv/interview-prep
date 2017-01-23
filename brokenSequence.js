// You have a sequence of positive numbers starting with 1, but one number is missing!

// Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

// In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

// Note that the input may be with random order.

findMissingNumber("1 3 2 5") // returns 4, because 4 is missing

findMissingNumber("1 2 3 4") // returns 0, because the sequence isn't broken

findMissingNumber("1 5") // returns 2, because the sequence is missing more than one number and 2 is the lowest between 2, 3 and 4

findMissingNumber("2 1 4 3 a") // returns 1, because it's an invalid sequence. in this case, it's invalid because contain a non numerical character

//sort sequence ascending
//find non-numeric characters
//  reject if any found and return 1
//go through sequence from smallest to largest
//when there's a gap of more than one, return the last increment of one
// if no gap found, return 0
