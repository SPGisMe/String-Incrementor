function incrementString (strng) {
  let result = '';
  let incrementor = 1;
  let nums = strng.match(/\d+/g);
  let str = strng.match(/\D+/g);
  let numPlus = Number(nums) + incrementor;
  
  str === null ? result = numPlus.toString().padStart(nums[0].length, '0')
  : nums === null ? result = str.join('') + '1'
  : result = str.join('') + numPlus.toString().padStart(nums[0].length, '0');
  
  result answer;
}
