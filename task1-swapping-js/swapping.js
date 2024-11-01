document.getElementById('swapButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;

    // Check if the number has at least 3 digits
    if (numberInput.length < 3 || isNaN(numberInput)) {
        alert('Please enter a valid number with at least 3 digits.');
        return;
    }

    // Swap the second and last digits
    let digits = numberInput.split('');
    let temp = digits[1]; // Second digit
    digits[1] = digits[digits.length - 1]; // Last digit
    digits[digits.length - 1] = temp; // Second digit becomes last

    // Rebuild the new number
    let newNumber = digits.join('');

    // Display the result
    document.getElementById('result').innerText = `Original number: ${numberInput}, New number: ${newNumber}`;
});
