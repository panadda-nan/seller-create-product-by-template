import { expect } from '@playwright/test';
import { test } from '../test-config';
test('Test Demo', async ({ page, sellerCredential }) => {

    await page.goto('https://qa.nocnoc-internal.com/seller/login');
    await page.getByPlaceholder('Enter email or mobile number').type(sellerCredential.sellerUsername);
    await page.getByPlaceholder('Enter Password').type(sellerCredential.sellerPassword);
    await page.locator('.btn-signup').click();
    await page.locator('.icon-product-v2').click();
    await page.locator('span:has-text("การจัดการสินค้า")').click() ;
    await expect(page.getByText('เพิ่มสินค้าใหม่')).toBeVisible();
    await page.screenshot({ path: 'test-results/screenshot.png', fullPage: true });
    await page.getByText('เพิ่มสินค้าใหม่').click();
    await expect(page.locator('.heading-4')).toHaveText('เพิ่มสินค้า');

    //*** product name ***

    await page.fill('input[name="productDetail.nameTH"]', 'Autobot-demo');
    console.log('Autobot-demo');
    await page.screenshot({ path: 'test-results/screenshot-demo-1.png', fullPage: true });


    //*** category ***
    
    //*** click category box ***
    //ของเดิม
    //wait page.getByPlaceholder('เลือกหรือพิมพ์เพื่อค้นหาหมวดหมู่สินค้า').click();
    //data-test id     
    await page.getByTestId('หมวดหมู่สินค้า').click();

    //*** type category ***
    //ของเดิม
    //await page.getByPlaceholder('เลือกหรือพิมพ์เพื่อค้นหาหมวดหมู่สินค้า').type('รถเข็นเด็ก');
    //data-test id     
    await page.getByTestId('หมวดหมู่สินค้า').type('รถเข็นเด็ก');
    await page.screenshot({ path: 'test-results/screenshot-demo-2.png', fullPage: true });

    //*** click category ***
    //ของเดิม
    //const locator = await page.locator(`//div[@class="caption-4" and text()='รถเข็นเด็ก']`);
    //await locator.click();

    //await page.locator('div.caption-4').filter({ hasText: 'รถเข็นเด็ก'}).click(); --> failed
    await page.getByText('รถเข็นเด็ก', { exact: true }).click();

    //data-test id     
    //await page.getByTestId('รถเข็นเด็ก').click();

    await page.screenshot({ path: 'test-results/screenshot-demo-3.png', fullPage: true });



});