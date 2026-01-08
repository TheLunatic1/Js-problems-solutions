function capitalizeWords(str) {
    let words = str.split(" ");
    let capitalized = [];
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0].toUpperCase();
        let restOfWord = word.slice(1);
        capitalized.push(firstLetter + restOfWord);
    }
    
    return capitalized.join(" ");
}

// Test the function
const input = "hello world";
const result = capitalizeWords(input);
console.log("Input:", input);
console.log("Capitalized:", result);