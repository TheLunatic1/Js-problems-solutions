function findEvenNumbers(numbers) {
    let evenNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    
    return evenNumbers;
}

// Test the function
const numbers = [1, 2, 3, 4, 5, 6];
const result = findEvenNumbers(numbers);
console.log("Original array:", numbers);
console.log("Even numbers:", result);