/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  const middleValue = Math.floor(nums.length / 2);
  let arr1 = nums.slice(0, middleValue);
  let arr2 = nums.slice(middleValue);
  debugger;
  return merge(mergeSort(arr1), mergeSort(arr2));
};

const merge = (arr1, arr2) => {
  const newArray = [];
  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] <= arr2[0]
      ? newArray.push(arr1.shift())
      : newArray.push(arr2.shift());
  }
  return newArray.concat(arr1, arr2);
};
// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("merge sort", function () {
  const nums = [1, 3, 2];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3]);
});
