export async function gotoProductsPage({page}){
    await page.locator('.icon-product-v2').click();
    await page.locator('.icon-product-v2').hover();
    await page.locator('span:has-text("การจัดการสินค้า")').click() ;
}

export async function gotoAddNewProduct(page, url){
    await page.goto(url, { timeout: 10000 });
    setTimeout(() => {
        console.log('1 seconds have passed without doing anything.');
      }, 1000);
}

export async function gotoInventoryPage({page}){
    await page.locator('div').filter({ hasText: /^คลังสินค้า\/จัดส่ง$/ }).nth(1).click();
    await page.getByRole('link', { name: 'สินค้าคงคลัง', exact: true }).click();
}

export async function gotoBrandPage(page){
    await page.locator('.icon-product-v2').hover();
    await page.locator('.icon-product-v2').click();
    await page.click('text=แบรนด์/ยี่ห้อสินค้า');
    await page.screenshot({ path: 'test-results/gotoBrandPage.png', fullPage: true });

}