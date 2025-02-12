/**
 * @returns number 0 - length
 */
/** random number */
export function getRandomNumber(end: number): number {
    const start = 16;
    const length = end - start;
    const randomNumber = Math.floor(Math.random() * length) + start;
    return randomNumber;
  
} 