const arr = [1, 2, 3];

// Here is our implementation for Array.prototype.map
function myMap(array, cb) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const index = i;
    const newValue = cb(element, index, array);
    newArray.push(newValue);
  }

  return newArray;
}
const result3 = arr.map((x, i, arr) => {
  // console.log(arr);
  return x * i;
});
console.log(result3);
const result4 = myMap(arr, (x, i, arr) => {
  // console.log(arr);
  return x * i;
});
console.log(result4);