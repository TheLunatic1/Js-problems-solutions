function factorial(n) {
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    
    return result;
}

// Test the function
const number = 5;
const result = factorial(number);
console.log("Number:", number);
console.log("Factorial:", result);