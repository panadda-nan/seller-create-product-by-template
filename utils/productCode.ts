/**
 * return product Code
 */
export function generateProductCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 10;
    let productCode = '';

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        productCode += characters.charAt(randomIndex);
    }

    return productCode;
}

// Example usage
// const productCode = generateProductCode();
// console.log('Generated Product Code:', productCode);
