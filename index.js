// Calculates 10% tax on an amount.
function calculateTax(amount) {
    return amount * 0.10;
}
// converts a String to uppercase.
function convertToUpperCase(text) {
    return text.toUpperCase();
}
    // Returns the larger number between two inputs.
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}   
// checks if a string reads the same forwards and backwards.
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}
// applies the percentage discount and returns the final price.
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };