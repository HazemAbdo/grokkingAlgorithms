//TODO implement selection sort algorithm
function findSmallest(arr) {
  let min = Infinity;
  let minIndex = 0;
  for (let index = 0; index < arr.length; index++) {
    if (min >= arr[index]) {
      min = arr[index];
      minIndex = index;
    }
  }
  return { min, minIndex };
}
function selectionSort(arr) {
  let newArr = [];
  let length = arr.length;
  for (let index = 0; index < length; index++) {
    let { min, minIndex } = findSmallest(arr);
    newArr.push(min);
    arr.splice(minIndex, 1);
  }
  return newArr;
}
console.log(selectionSort([5, 3, 2, 4, 1]));
