import { test } from '../../test-config';
import * as logins from '../../page-objects/common/login';
import * as menu from '../../page-objects/common/menu';
import { url } from '../../test-data/url.ts';
import * as invent from '../../page-objects/inventory/inventory-page'
let lang = 'th'; // lang = 'th' or 'en' only


test.describe.skip("product management page", () => {

    test('verify inventory page', async ({ page, sellerCredential }) => {
        //console.log("verify product management page");
        test.slow();

        await logins.sellerLogin(page,url.qa,sellerCredential.sellerUsername,sellerCredential.sellerPassword);
        await logins.verifySuccessfulLogin(page,sellerCredential.sellerName);
        await logins.closePopupTaskManage(page);
        await logins.changeLang(page, lang)
        await menu.gotoInventoryPage({page});
        await invent.verifyInventoryPage({page});
        
    });

});