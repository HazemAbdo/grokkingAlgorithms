//quest Suppose you’re a farmer with n*m land
// You want to split your land to the largest possible equal squares
//so what is the length of this square
//ans it is a divide and conqure problem
//our simplest case(base case) is when n is multiple of m(e.g n=3*k)
//then we can divide the land to k*k||k*k||k*k-->length is k
//we will divide our land until we reach this case
//1680*640-->640*640||640*640||640*400
//then our problem becomes that what is the length in case of 640*400
//640*400-->400*400||160*400
//400*120-->240*240||160*240
//240*160-->160*160||80*160
//160*80 it is our base case then the answer is 80
function getLargestNumOfSquares(n, m) {
  if (n % m == 0) return m;
  else return getLargestNumOfSquares(m, n % m);
}
// console.log("getLargestNumOfSquares", getLargestNumOfSquares(1680, 640));
// console.log("getLargestNumOfSquares", getLargestNumOfSquares(640 * 2, 640));
// console.log("getLargestNumOfSquares", getLargestNumOfSquares(15320, 2056));
//-------------------------------------------------------------------------------
//NOTE Tip When you’re writing a recursive function involving an array,
//the base case is often an empty array or an array with one element.
//If you’re stuck, try that first
function sumArr(arr) {
  if (arr.length == 0) return 0;
  else return arr[0] + sumArr(arr.slice(1));
}
console.log("sumArr", sumArr([1, 2, 3, 4, 5]));
//-------------------------------------------------------------------------------
// Write a recursive function to count the number of items in a list
function countItems(arr) {
  if (arr.length == 0) return 0;
  else return 1 + countItems(arr.slice(1));
}
console.log("countItems", countItems([1, 2, 3, 4]));
console.log("countItems", countItems([1]));
console.log("countItems", countItems([]));
//-------------------------------------------------------------------------------
//Write a recursive function to Find the maximum number in a list
function getMax(arr) {
  if (arr.length == 0) return 0;
  else return Math.max(arr[0], getMax(arr.slice(1)));
}
console.log("getMax", getMax([6, 2, 3, 4, 5, -10, 11]));
console.log("getMax", getMax([8, 2]));
console.log("getMax", getMax([6]));
console.log("getMax", getMax([]));
//-------------------------------------------------------------------------------
//Write a recursive implementation of binary search
function recursiveBinarySearch(arr, target, start = 0, end = arr.length) {
  mid = Math.floor((start + end) / 2);
  if (start > end) return;
  if (target == arr[mid]) return mid;
  else if (target > arr[mid])
    return recursiveBinarySearch(arr, target, mid + 1, end);
  else if (target < arr[mid])
    return recursiveBinarySearch(arr, target, start, mid - 1);
}
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5], 6));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5], 1));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5], 2));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5], 3));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5], 4));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5], 5));
console.log("-----------------------");
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 6));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 1));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 2));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 3));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 4));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 5));
console.log("recBinarySearch", recursiveBinarySearch([1, 2, 3, 4, 5, 7], 7));
console.log("-----------------------");
console.log("recBinarySearch", recursiveBinarySearch([1], 7));
console.log("recBinarySearch", recursiveBinarySearch([7], 7));
console.log("-----------------------");
console.log("recBinarySearch", recursiveBinarySearch([], 7));
//-------------------------------------------------------------------------------
function quickSort() {}
