/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j; // the inner counter

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }
    // j always ends up equaling -1 here is the important part to remember
    // do the insertion
    nums[j + 1] = numberToInsert;
  }
  return nums;
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  [5, 10, 3, 8, 2, 6, 4, 7, 9, 1];
  [5, 10, 10, 8, 2, 6, 4, 7, 9, 1]; // inner loop, holding 3
  [5, 5, 10, 8, 2, 6, 4, 7, 9, 1]; // inner loop, holding 3
  [3, 5, 10, 8, 2, 6, 4, 7, 9, 1]; // ending inner loop

  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
