function isPalindrome(str) {
  let reverse = "";
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reverse += formattedStr[i];
  }
  if (formattedStr === reverse) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
