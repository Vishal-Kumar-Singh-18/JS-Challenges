function removeDuplicates(arr) {
    let newArray = [];

    for(let i=0; i<arr.length; i++) {
        if (newArray.includes(arr[i]) !== true) {
            newArray.push(arr[i])
        }
    }

    return newArray;
}

// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

module.exports = removeDuplicates;
