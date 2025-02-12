import { expect } from '@playwright/test';


export async function verifyProductsManagementPage({page}){

    const newProductButton = page.locator('text=เพิ่มสินค้าใหม่');
    await expect(newProductButton).toBeVisible({ timeout: 10000 });
    await page.screenshot({ path: 'test-results/verifyProductsManagementPage.png', fullPage: true});
}

export async function clickAddNewProductButton({page}){    
    await page.getByText('เพิ่มสินค้าใหม่').scrollIntoViewIfNeeded();
    //await expect(page.locator('.heading-4')).toHaveText('เพิ่มสินค้า');
    await page.getByText('เพิ่มสินค้าใหม่').click();

}

export async function clickSaveBtn(page) {
    await page.getByRole('button', { name: 'บันทึกแบบร่าง' || 'Save'}).nth(0).scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'บันทึกแบบร่าง' || 'Save'}).nth(0).click();

}

export async function clickSubmitBtn(page) {
    await page.getByRole('button', { name: 'บันทึกและส่งขออนุมัติ' || 'Save & send for approval'}).nth(0).scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'บันทึกและส่งขออนุมัติ' || 'Save & send for approval'}).nth(0).click();
    // setTimeout(() => {
    //     console.log('3 seconds have passed without doing anything.');
    //   }, 5000);
}

export async function clickConfirmModal(page) {
    await page.getByTestId('confirmModalConfirmBtn').click();
}

export async function verifySummittedProduct(page) {
    await expect(page.locator('[data-testid="snackbar"]')).toHaveText('บันทึกข้อมูลสินค้าแล้ว รอการอนุมัติ');
    await page.screenshot({ path: 'test-results/verifySummittedProduct.png', fullPage: false });

}

export async function searchProductSubmitted(page,productCode,productName) {
    await page.getByText('เพิ่มสินค้าใหม่').scrollIntoViewIfNeeded();
    await page.getByText('เพิ่มสินค้าใหม่').click();
    await page.getByText('รออนุมัติ').click();
    await page.getByText('เช่น ชื่อสินค้า, โค้ดสินค้า หรือหมายเลข SKU').click();
    await page.getByText('เช่น ชื่อสินค้า, โค้ดสินค้า หรือหมายเลข SKU').type(productCode);
    await page.getByText('ค้นหา').click();
    await expect(page.locator('flex flex-col space-y-2')).toHaveText(productName);
    await page.screenshot({ path: 'test-results/verifySummittedProduct.png', fullPage: false });

}

