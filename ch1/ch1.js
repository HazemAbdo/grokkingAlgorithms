//make sure that the array is sorted
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    //then the target in the right half
    if (guess < target) {
      low = mid + 1;
    }
    //then the target in the left half
    else if (guess > target) {
      high = mid - 1;
    }
    //found
    else {
      return mid;
    }
  }
  return null;
}
my_list = [1, 3, 5, 7, 9];
console.log(binarySearch(my_list, 20));
