function displayLikes(arr) {
  let count = 0;

  if (arr.length === 0) {
    return "no one likes this";
  } else if (arr.length >= 4) {
    for (let i = 2; i < arr.length; i++) {
      count++;
    }
    return `${arr[0]}, ${arr[1]} and ${count} others like this`;
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  }
}

module.exports = displayLikes;
