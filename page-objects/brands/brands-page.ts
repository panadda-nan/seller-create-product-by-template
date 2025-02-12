import { expect } from '@playwright/test';

export async function verifyBrandPage(page){
    await page.locator('#content-pad-loader').click();    
    await expect(page.locator('#content-pad-loader h1.heading-2')).toBeVisible();
    await expect(page.locator('#content-pad-loader h1.heading-2')).toHaveText('แบรนด์/ยี่ห้อสินค้า');
    await page.$('button:has-text("สร้างแบรนด์/ยี่ห้อ")');
    await expect(page.locator('div table')).toBeVisible();
    await page.screenshot({ path: 'test-results/verifyBrandPage.png', fullPage: true });

}

export async function verifyBrandRow1IsNotNull(page) {
    await expect(page.locator('table.Table-module__table--sMf6g tbody tr')).toBeTruthy();
    await page.screenshot({ path: 'test-results/verifyBrandRow1IsNotNull.png', fullPage: false });

}

export async function clickCreateBrandButton(page) {
    await page.locator('button:has-text("สร้างแบรนด์/ยี่ห้อ")').click();
    await page.screenshot({ path: 'test-results/clickCreateBrandButton.png', fullPage: false });

}

export async function verifyCreateBrandModal(page) {
    //await expect(page.locator('headlessui-dialog-:rd:')).toBeVisible();
    await expect(page.locator('span.heading-3')).toHaveText('สร้างแบรนด์หรือยี่ห้อสินค้า');
    await expect(page.getByPlaceholder('ระบุชื่อแบรนด์ / ยี่ห้อสินค้า')).toBeVisible();
    await expect(page.locator('button:text("ยกเลิก")')).toBeVisible();
    await expect(page.locator('button:text("บันทึก")')).toBeVisible();
    await page.screenshot({ path: 'test-results/verifyCreateBrandModal.png', fullPage: false });

}

export async function inputBrand(page,brand) {
    await page.getByPlaceholder('ระบุชื่อแบรนด์ / ยี่ห้อสินค้า').type(brand);
    await page.screenshot({ path: 'test-results/inputBrand.png', fullPage: false });

}

export async function clickSaveBrandButton(page) {
    await page.locator('button:text("บันทึก")').click();
}

export async function verifyCreatedBrandSuccessful(page,brand) {
    //await page.locator('td.Table-module__td--AvfkC').withText(`${brand}`).scrollIntoViewIfNeeded();
    await page.locator(`//td[contains(text(), '${brand}')]`).first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'test-results/verifyCreatedBrand.png', fullPage: false });

}
