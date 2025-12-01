function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    reversedStr += str[i];
  }

  return reversedStr;
}

// const reverseString = (str) => str.split('').reverse().join('');
// Here we need to split first bcz reverse() method in not available direvtly to 'String'
// Therefore using split converted it to an array

module.exports = reverseString;
