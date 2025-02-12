import { expect } from "@playwright/test";

export async function gotoProductsPage(page){
    await page.locator('z-[100] h-full overflow-y-auto bg-white').click() ;
    await page.locator('icon-product-v2 font-18').first().click();
    await page.locator('span:has-text("การจัดการสินค้า")').click() ;
}

export async function gotoProductsListPage(page, url){
    await page.goto(url);
}
export async function verifyProductListPage(page){
    await expect(page.locator('h1.heading-2').nth(1)).toHaveText('ตรวจสอบและอนุมัติสินค้า');
    await page.screenshot({ path: 'test-results/verifyProductListPage.png', fullPage: false });

}
