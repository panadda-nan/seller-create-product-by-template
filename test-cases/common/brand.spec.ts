
import { sellerLogin, verifySuccessfulLogin } from '../../page-objects/common/login.ts';
import * as logins from '../../page-objects/common/login';
import * as menu from '../../page-objects/common/menu';
import * as brands from '../../page-objects/brands/brands-page';
import { test } from '../../test-config.ts';
import { url } from '../../test-data/url.ts'
import {generateRandomSixDigitNumber} from '../../utils/randomNumber'


let lang = 'th'; // lang = 'th' or 'en' only
let brandName = 'Autobot'+ generateRandomSixDigitNumber();

test.describe("verify brand", () => {

  test('The system can successfully retrieve a list of brands.', async ({page, sellerCredential }) => {

    test.slow();

    await sellerLogin(page,url.qa,sellerCredential.sellerUsername,sellerCredential.sellerPassword);
    await verifySuccessfulLogin(page,sellerCredential.sellerName);
    await logins.closePopupTaskManage(page);
    await logins.changeLang(page, lang);
    await menu.gotoBrandPage(page);

    //brands-page
    await brands.verifyBrandPage(page);
    await brands.verifyBrandRow1IsNotNull(page);
  });

  test.skip('The user can successfully create a brand', async ({page, sellerCredential }) => {
    test.slow();

    await sellerLogin(page,url.qa,sellerCredential.sellerUsername,sellerCredential.sellerPassword);
    await verifySuccessfulLogin(page,sellerCredential.sellerName);
    await logins.closePopupTaskManage(page);
    await logins.changeLang(page, lang);
    await menu.gotoBrandPage(page);

    //brands-page
    await brands.verifyBrandPage(page);
    await brands.clickCreateBrandButton(page);
    await brands.verifyCreateBrandModal(page);
    await brands.inputBrand(page,brandName);
    await brands.clickSaveBrandButton(page);
    await brands.verifyCreatedBrandSuccessful(page,brandName);

  });

});