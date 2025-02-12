
import { sellerLogin, verifySuccessfulLogin } from '../../page-objects/common/login';
import { test } from '../../test-config';
import { url } from '../../test-data/url.ts'



test.skip('seller user can login to seller portal', async ({context,browser, page, sellerCredential }) => {

  await sellerLogin(page,url.qa,sellerCredential.sellerUsername,sellerCredential.sellerPassword);
  await verifySuccessfulLogin(page,sellerCredential.sellerName);

});