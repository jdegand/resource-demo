import { Locator, Page } from '@playwright/test';

export class DarkModeToggler {
    readonly page: Page;
    readonly toggleCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.toggleCheckbox = this.page.locator('.nav__right__toggler').nth(0);
    }

    async toggleDarkMode() {
        await this.toggleCheckbox.click();
    }

    async getTheme() {
        return await this.page.evaluate(() => document.body.getAttribute('data-theme'));
    }
}