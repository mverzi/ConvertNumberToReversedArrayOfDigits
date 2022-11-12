/**
 * This function takes in a random non-negative number, and returns the digits of this number within an array in reverse order.
 * @param {integer} n 
 * @returns Digits of n in a reverse order array
 */
function digitize(n) {
    return n.toString().split('').reverse().map((str) => Number(str))
  }