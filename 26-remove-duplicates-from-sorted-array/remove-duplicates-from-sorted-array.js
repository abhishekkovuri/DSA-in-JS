/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (arr) {
  let x = 0;
  let i = 1;
  while(i < arr.length) {
    if(arr[i] > arr[x]) {
        x = x + 1;
        arr[x] = arr[i]
    }
    i++;
  }
  return x + 1;
};