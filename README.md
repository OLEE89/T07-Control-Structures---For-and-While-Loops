"# T07- Task 1"


// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swapping Digits</title>
    <script src="swapping.js" defer></script>
</head>
<body>
    <h1>Swap Digits of a Number</h1>
    <label for="numberInput">Enter a number with at least 3 digits:</label>
    <input type="text" id="numberInput">
    <button id="swapButton">Swap Digits</button>
    <p id="result"></p>
</body>
</html>

// swapping.js

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



"# T07-Task 2 " 

// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    <script src="palindrome.js" defer></script>
</head>
<body>
    <h1>Palindrome Checker</h1>
    <label for="wordInput">Enter a word:</label>
    <input type="text" id="wordInput">
    <button id="checkButton">Check</button>
    <p id="result"></p>
</body>
</html>

//palindrome.js

document.getElementById('checkButton').addEventListener('click', function() {
    const wordInput = document.getElementById('wordInput').value;

    // Normalize the word (remove spaces and convert to lowercase)
    const word = wordInput.replace(/\s+/g, '').toLowerCase();
    let isPalindrome = true;
    let leftIndex = 0;
    let rightIndex = word.length - 1;

    // Check if the word is a palindrome
    while (leftIndex < rightIndex) {
        if (word[leftIndex] !== word[rightIndex]) {
            isPalindrome = false;
            break;
        }
        leftIndex++;
        rightIndex--;
    }

    // Display the result
    if (isPalindrome) {
        document.getElementById('result').innerText = `"${wordInput}" is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `"${wordInput}" is not a palindrome.`;
    }
});
