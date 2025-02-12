
import { expect } from '@playwright/test';
import { sellerLogin, verifySuccessfulLogin } from '../../page-objects/common/login';
import { test } from '../../test-config';
import { url } from '../../test-data/url';


test.skip('seller can open chat dialog', async ({context,browser, page, sellerCredential }) => {

  await sellerLogin(page,url.qa,sellerCredential.sellerUsername,sellerCredential.sellerPassword);
  await verifySuccessfulLogin(page,sellerCredential.sellerName);

  // In case cookie consent bar appear, it will be over chat button, close it first.
  const cookieConsentbar = await page.locator('//div[id="cookie-consent-bar"]');
  if (cookieConsentbar) {
    await page.locator('button.close').click();
  }

  await page.locator('//button[text()="กล่องข้อความแชท"]').click();

  await expect(page.locator('div.sendbird-channel-list__body')).toBeVisible();


});

