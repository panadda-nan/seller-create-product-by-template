import { test as base } from '@playwright/test';

export type TestOptions = {
    sellerCredential: {
        sellerUsername: string;
        sellerPassword: string;
        sellerName: string;
    }

};

export const test = base.extend<TestOptions>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  sellerCredential: {
        sellerUsername: process.env.sellerUsername || '',
        sellerPassword: process.env.sellerPassword || '',
        sellerName: process.env.sellerName || ''
    },
}); 