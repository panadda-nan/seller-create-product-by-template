import { expect } from '@playwright/test';

export async function verifyInventoryPage({page}){
    const newProductButton = page.getByRole('heading', { name: 'สินค้าคงคลัง' , exact: true });
    await expect(newProductButton).toBeVisible({ timeout: 10000 });
    //await expect(page.getByText('เนื่องจากอยู่ระหว่างพัฒนาระบบค้นหาสินค้า หากผู้ขายเปลี่ยนแปลงข้อมูลสินค้าหลัง 3')).toBeVisible();
    //await expect(page.getByText('ตั้งแต่วันที่ 25 เมษายน 2566')).toBeVisible();
    await expect(page.getByPlaceholder('หมายเลข SKU')).toBeVisible();
    await expect(page.getByRole('button', { name: 'อัปโหลดเท็มเพลต' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'ดาวน์โหลดรายการสินค้า' })).toBeVisible();
    await expect(page.getByText('ทุกสินค้า')).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'รหัสสินค้า' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'ข้อมูลสินค้า' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'สถานะคลังสินค้า' })).toBeVisible();
    await expect(page.getByRole('columnheader').nth(3)).toBeVisible();
    await page.getByText('จำนวนรายการที่แสดงผล:').scrollIntoViewIfNeeded();
    await expect(page.getByText('จำนวนรายการที่แสดงผล:')).toBeVisible();
    await expect(page.getByRole('button', { name: '25' })).toBeVisible();
    await expect(page.getByRole('button', { name: '1' })).toBeVisible();
    await expect(page.locator('.paging-btn').first()).toBeVisible();
    await expect(page.locator('a:nth-child(6)')).toBeVisible();
    await page.screenshot({ path: 'test-results/verifyInventoryPage.png', fullPage: true});
}
//ห้ามลบนะ เดี๋ยวกลับมาทำ!!!
// export async function updateInventoryBySKU({page}){

// }