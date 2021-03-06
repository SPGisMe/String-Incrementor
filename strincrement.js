function incrementString (strng) {
  let result = '';
  let incrementor = 1; // amount to increment number by
  let nums = strng.match(/\d+/g);
  let str = strng.match(/\D+/g);
  let numPlus = Number(nums) + incrementor;
  
  str === null ? result = numPlus.toString().padStart(nums[0].length, '0') // retains extra 0's in formatting
  : nums === null ? result = str.join('') + incrementor
  : result = str.join('') + numPlus.toString().padStart(nums[0].length, '0');
  
  return result;
}
