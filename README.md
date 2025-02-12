## Prerequisite 

- Ensure NodeJs Installed (version 18)
- Install Yarn   
  ```
  yarn
  ```

- Install Playwright 
  ```
  yarn playwright install --with-deps
  ```

- More info: https://playwright.dev/docs/intro#installing-playwright

- Create file secure.config.env in /config folder. put below content in the fiel 
  ```
  sellerUsername={seller user email}
  sellerPassword={seller user password}
  ```

## Run Test
- Run All 
  ``` 
  yarn playwright test
  ```


## Notes
- For QA Environment, it required network access to QA env, VPN may required.
- For VSCode, It may easier with this extension 
  
  Name: Playwright Test for VSCode
  
  VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

