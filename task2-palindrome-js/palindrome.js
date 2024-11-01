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
