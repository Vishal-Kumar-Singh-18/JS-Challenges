function arrayIntersection(arr1, arr2) {
  let result = [];

  for (let value of arr1) {
    if (arr2.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

// function arrayIntersection (arr1, arr2) {
//     return Array.from(new Set(arr1, arr2))
// }

module.exports = arrayIntersection;
