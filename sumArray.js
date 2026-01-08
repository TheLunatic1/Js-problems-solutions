function sumArray(numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    
    return total;
}

// Test the function
const numbers = [1, 2, 3, 4];
const result = sumArray(numbers);
console.log("Array:", numbers);
console.log("Sum:", result);