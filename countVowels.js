function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

// Test the function
const input = "programming";
const result = countVowels(input);
console.log("Input:", input);
console.log("Vowel count:", result);