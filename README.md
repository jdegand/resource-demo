# Resource Demo

This is reworked from my [Angular Dictionary 17 App](https://github.com/jdegand/angular-17-dictionary-app).  I replicated the project in a more modern and maintainable Angular style.

## How to Use

```bash

git clone https://github.com/jdegand/resource-demo.git

# cd into the directory
npm install

npm start

# For Playwright tests to pass, you will need to install browsers.
# You can install all browsers with `npx playwright install`.
# In `playwright.config.ts`, you will need to uncomment / comment out browsers to match what you have installed.
# Or you can just install any browser separately. As configured, the app expects the Chromium browser to be installed.

npx playwright install chromium

ng run e2e

```
