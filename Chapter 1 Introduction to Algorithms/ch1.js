//make sure that the array is sorted
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length;
  while (!(low > high)) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess == target) return mid;
    //then the target in the right half
    else if (guess < target) {
      low = mid + 1;
    }
    //then the target in the left half
    else {
      high = mid - 1;
    }
  }
  return null;
}
my_list = [1, 3, 5, 7, 9];
console.log(binarySearch(my_list, 20));
console.log(binarySearch(my_list, 1));
console.log(binarySearch(my_list, 3));
console.log(binarySearch(my_list, 5));
console.log(binarySearch(my_list, 7));
console.log(binarySearch(my_list, 9));
console.log("------------------------");
my_list = [1, 2, 3, 5, 7, 9];
console.log(binarySearch(my_list, 20));
console.log(binarySearch(my_list, 1));
console.log(binarySearch(my_list, 2));
console.log(binarySearch(my_list, 3));
console.log(binarySearch(my_list, 5));
console.log(binarySearch(my_list, 7));
console.log(binarySearch(my_list, 9));
