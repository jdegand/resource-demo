import { Locator, Page } from '@playwright/test';

export class FontDropdown {
    readonly page: Page;
    readonly fontDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fontDropdown = this.page.locator('#font');
    }

    async selectFont(font: string) {
        await this.fontDropdown.selectOption(font);
    }

    async getSelectedFontText() {
        return (await this.fontDropdown.locator('option:checked').textContent())?.trim();
    }

    async getFontFamily() {
        return await this.page.locator('body').evaluate((body) =>
            window.getComputedStyle(body).fontFamily
        );
    }
}