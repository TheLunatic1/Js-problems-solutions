function isPalindrome(str) {
    let reversed = "";
    
    // Reverse string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    
    // Check if original and reversed are same
    return str === reversed;
}

// Test the function
console.log("Is 'madam' a palindrome?", isPalindrome("madam"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));