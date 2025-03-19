import { Page } from "@playwright/test";

export class SearchForm {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillTextbox(value: string) {
        await this.page.locator('input[name="searchTerm"]').fill(value);
    }

    async clearInput() {
        await this.page.locator('input[name="searchTerm"]').fill('');
    }

    async clickButton() {
        await this.page.getByRole('button').click();
    }
}