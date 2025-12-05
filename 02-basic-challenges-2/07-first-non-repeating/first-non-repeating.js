function findFirstNonRepeatingCharacter(str) {
    const charCount = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i]; 
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char] = charCount[char] + 1;
        }
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;

}

module.exports = findFirstNonRepeatingCharacter;
