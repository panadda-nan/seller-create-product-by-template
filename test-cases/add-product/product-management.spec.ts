import { expect } from '@playwright/test';
import { sellerLogin, verifySuccessfulLogin } from '../../page-objects/common/login';
import { test } from '../../test-config';

test.describe("product management page", () => {

    test.skip('verify product management page', async ({context,browser, page, sellerCredential }) => {
        console.log("verify product management page");
    });

    test.skip('search function', async ({context,browser, page, sellerCredential }) => {
        console.log("search function");
    });
});