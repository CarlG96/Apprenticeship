/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  // base case
  if (array.length <= 0) {
    return 0;
  }
  const firstElement = array.shift();
  if (typeof firstElement === "number") {
    return firstElement + nestedAdd(array);
  }
  // actual comparison
  return nestedAdd(firstElement) + nestedAdd(array);
}

test("nested arrays addition", () => {
  expect(nestedAdd([])).toEqual(0);
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
