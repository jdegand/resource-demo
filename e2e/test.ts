import { FontDropdown } from "./page-object/font-dropdown";
import { test as base } from '@playwright/test';
import { SearchForm } from "./page-object/search-form";
import { DarkModeToggler } from "./page-object/dark-mode-toggler";

export const test = base.extend<{
    fontDropdown: FontDropdown;
    searchForm: SearchForm;
    darkModeToggler: DarkModeToggler
}>({
    fontDropdown: async ({ page }, use) => {
        const fontPage = new FontDropdown(page);
        await use(fontPage);
    },
    searchForm: async ({ page }, use) => {
        const searchPage = new SearchForm(page);
        await use(searchPage);
    },
    darkModeToggler: async ({ page }, use) => {
        const darkModePage = new DarkModeToggler(page);
        await use(darkModePage);
    }
});