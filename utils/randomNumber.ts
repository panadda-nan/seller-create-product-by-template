/**
 * @returns randon number 6 digits
 */
export function generateRandomSixDigitNumber() {
    const min = 100000; // Smallest 6-digit number (100,000)
    const max = 999999; // Largest 6-digit number (999,999)

    // Generate a random number between min and max (inclusive)
    const randomSixDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomSixDigitNumber;
}

