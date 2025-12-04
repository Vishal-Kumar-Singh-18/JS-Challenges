function findMissingNumber(arr) {
    if (arr.length === 0) return 1

    let maxNum = arr.length + 1;
    let maxSum = (maxNum*(maxNum+1))/2;
    let sum = 0;

    for (const n of arr) {
        sum += n
    }

    return maxSum - sum;

}

module.exports = findMissingNumber;
