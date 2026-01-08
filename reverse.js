function reverseString(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    
    return reversed;
}

// Test the function
const input = "hello";
const result = reverseString(input);
console.log("Input:", input);
console.log("Reversed:", result);