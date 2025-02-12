import * as logins from '../../page-objects/common/login.ts';
import { admin } from '../../test-data/admin-account.ts'
import { url } from '../../test-data/url.ts'
import { test } from '@playwright/test';
import * as menu from '../../page-objects/common/admin-menu.ts';


let lang = 'th'; // lang = 'th' or 'en' only


test.describe("admin - product list", () => {

    test('verify product list page', async ({ page }) => {
        await logins.AdminLogin(page,url.qa,admin.adminUser,admin.adminPass);
        await logins.verifyAdminLoginSuccessful(page);
        await logins.closePopupTaskManage(page);
        await logins.changeLang(page, lang)

        await menu.gotoProductsListPage(page,url.qa_product);
        await menu.verifyProductListPage(page);
    });
    
    
});