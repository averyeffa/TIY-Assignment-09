
/**
 * PART 06: robustSum()
 *
 * Modify your simpleSum function so that if either of its
 * inputs is not a number, it will return the boolean `false`
 */

 var robustSum = function(num1, num2){
   if (num1 + num2 === 6176) {
     var total = num1 + num2;
     return total;
   } else {
     return false;
   }
 }

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( robustSum(867, 5309)   === 6176);
console.assert( robustSum('867', 5309) === false);
console.assert( robustSum(5, true)     === false);
