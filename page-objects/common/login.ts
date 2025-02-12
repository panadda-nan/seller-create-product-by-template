/***  ***/
import { expect } from '@playwright/test';


export async function sellerLogin(page, url, userName, password) {
    await page.goto(url, { waitUntil: 'load', timeout: 80000 })
    await page.locator('input[name="loginemailphone"]').type(userName)
    await page.locator('input[name="loginpassword"]').type(password)
    //await page.locator('.btn-signup').click()
    await page.getByText('เข้าใช้งาน', { exact: true }).click();
}


export async function verifySuccessfulLogin(page, sellerName){
    await expect(page.locator('div.text-ellipsis')).toHaveText(sellerName);
    console.log('sellerName: ',await page.locator('div.text-ellipsis').textContent())
    await page.screenshot({ path: 'test-results/qaVerifySuccessfulLogin.png', fullPage: true });
}


// for qa
export async function changeLang(page, lang) {    
    await page.click('[data-testid="lang-switch"]');
    if (lang === 'th') {
        await page.click('[data-testid="lang-th"]');
    } else await page.click('[data-testid="lang-en"]');
}


//  export async function closePopupTaskManage(page) {
//     const element = await page.locator('[data-testid="task-manager-notification-acknowledge"]');
//     console.log('Popup task manager ', element);

//     if (element) {
//         try {
//             await page.click('[data-testid="task-manager-notification-acknowledge"]');
//             console.log('Close popup');
//         }catch (error) {
//             console.log('Error while closing task manager popup:', error.message);
//             // Handle the error or do nothing, depending on your use case
//         }
//     }
//     await page.screenshot({ path: 'test-results/closePopupTaskManage.png', fullPage: false });

// }
// export async function closePopupTaskManage(page) {
//     const taskManageButton = await page.locator('text=เข้าใจแล้ว');

//     if (await taskManageButton.isVisible()) {
//         await taskManageButton.click();
//         console.log('Clicked on "เข้าใจแล้ว" button.');
//     } else {
//         console.log('The "เข้าใจแล้ว" button is not visible on the page.');
//     }
    
// }

export async function closePopupTaskManage(page) {
    try {
        const taskManageButton = page.locator('text=เข้าใจแล้ว');

        // Wait for the button to appear in the DOM and be visible
        await taskManageButton.waitFor({ state: 'visible', timeout: 5000 });

        // Click the button
        await taskManageButton.click();
        console.log('Clicked on "เข้าใจแล้ว" button.');
        
    } catch (error) {
        // Handle cases where the button is not found or not visible
        console.error('The "เข้าใจแล้ว" button is not visible on the page or an error occurred:', error.message);
    }
}





// for production
// export async function changeLang(page, lang) {
//     await page.locator('li.language div').click()
//     if (lang === 'th') {
//         await page.click(`[value="th"]`)
//     } else await page.click(`[value="en"]`)
// }


export async function AdminLogin(page, url, userAdmin, passwordAdmin) {
    await page.goto(url, { waitUntil: 'load', timeout: 80000 })
    await page.locator('input[name="loginemailphone"]').type(userAdmin)
    await page.locator('input[name="loginpassword"]').type(passwordAdmin)
    await page.locator('.btn-signup').click()
}


export async function verifyAdminLoginSuccessful(page){
    await expect(page.locator('li.user > div div')).toHaveText('QA Seller Admin');
    await page.screenshot({ path: 'test-results/qaVerifySuccessfulLogin.png', fullPage: true });
}