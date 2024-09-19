const arr = ["bob", "abbba", "Pooja"];

for (const key of arr) {
    const lowerKey = key.toUpperCase(); // Convert to lowercase for case-insensitive comparison
    const reversedKey = lowerKey.split('').reverse().join(''); // Reverse the string

    if (lowerKey === reversedKey) {
        console.log(`${key} is a palindrome`);
    } else {
        console.log(`${key} is not a palindrome`);
    }
}
