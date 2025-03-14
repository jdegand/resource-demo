import { expect, test } from '@bgotink/playwright-coverage';

test('Dark Mode Toggler Test', async ({ page }) => {
  await page.goto('/', { waitUntil: "commit" });

  const toggleCheckbox = await page.locator('.nav__right__toggler').nth(0);

  await toggleCheckbox.click();

  const dataThemeDark = await page.evaluate(() => {
    return document.body.getAttribute('data-theme');
  });

  expect(dataThemeDark).toBe('dark');

  await toggleCheckbox.click();

  const dataThemeLight = await page.evaluate(() => {
    return document.body.getAttribute('data-theme');
  });

  expect(dataThemeLight).toBe('light');
});

test('should apply font family on dropdown selection', async ({ page }) => {
  await page.goto('/', { waitUntil: "commit" });

  const fontDropdown = await page.locator('#font');

  await expect(fontDropdown).toBeVisible();

  await fontDropdown.selectOption('Monospace');

  const selectedText = await fontDropdown.locator('option:checked').textContent();

  expect(selectedText?.trim()).toBe('Monospace');

  const fontFamily = await page.locator('body').evaluate((body) =>
    window.getComputedStyle(body).fontFamily
  );

  expect(fontFamily).toContain("monospace");
});

test('Input form interaction', async ({ page }) => {
  await page.goto('/', { waitUntil: "commit" });
  await page.getByRole('textbox').fill('red');
  await page.getByRole('button').click();
  await expect(page).toHaveURL('/details/red');
});

test('Validate UI with mocked API response', async ({ page }) => {
  await page.route('**/details/red', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          "word": "red",
          "phonetic": "/ɹɛd/",
          "phonetics": [
            {
              "text": "/ɹɛd/",
              "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/red-us.mp3",
              "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=424782",
              "license": {
                "name": "BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
              }
            }
          ],
          "meanings": [
            {
              "partOfSpeech": "noun",
              "definitions": [
                {
                  "definition": "Any of a range of colours having the longest wavelengths, 670 nm, of the visible spectrum; a primary additive colour for transmitted light: the colour obtained by subtracting green and blue from white light using magenta and yellow filters; the colour of blood, ripe strawberries, etc.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "A revolutionary socialist or (most commonly) a Communist; (usually capitalized) a Bolshevik, a supporter of the Bolsheviks in the Russian Civil War.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "One of the 15 red balls used in snooker, distinguished from the colours.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "Red wine.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "A redshank.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "An Amerind.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "The drug secobarbital; a capsule of this drug.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "A red light (a traffic signal)",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "(beverages) red lemonade",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "One of the three color charges for quarks.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "Chili con carne (usually in the phrase \"bowl of red\")",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "The redfish or red drum, Sciaenops ocellatus, a fish with reddish fins and scales.",
                  "synonyms": [],
                  "antonyms": []
                }
              ],
              "synonyms": [],
              "antonyms": []
            },
            {
              "partOfSpeech": "adjective",
              "definitions": [
                {
                  "definition": "Having red as its color.",
                  "synonyms": [],
                  "antonyms": [],
                  "example": "The girl wore a red skirt."
                },
                {
                  "definition": "(of hair) Having an orange-brown or orange-blond colour; ginger.",
                  "synonyms": [],
                  "antonyms": [],
                  "example": "Her hair had red highlights."
                },
                {
                  "definition": "(of a card) Of the hearts or diamonds suits. Compare black",
                  "synonyms": [],
                  "antonyms": [],
                  "example": "I got two red queens, and he got one of the black queens."
                },
                {
                  "definition": "(often capitalized) Supportive of, related to, or dominated by a political party or movement represented by the color red:",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "Amerind; relating to Amerindians or First Nations",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "Of the lower-frequency region of the (typically visible) part of the electromagnetic spectrum which is relevant in the specific observation.",
                  "synonyms": [],
                  "antonyms": []
                },
                {
                  "definition": "Having a color charge of red.",
                  "synonyms": [],
                  "antonyms": []
                }
              ],
              "synonyms": [
                "blood",
                "brick",
                "cardinal",
                "carmine",
                "cerise",
                "cherry",
                "claret",
                "cochineal",
                "coral",
                "crimson",
                "damask",
                "gules",
                "maroon",
                "rose",
                "rosy",
                "ruby",
                "rufescent",
                "rufous",
                "rust",
                "sanguine",
                "scarlet",
                "vermilion",
                "wine"
              ],
              "antonyms": [
                "nonred",
                "unred",
                "antired"
              ]
            }
          ],
          "license": {
            "name": "CC BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
          },
          "sourceUrls": [
            "https://en.wiktionary.org/wiki/red"
          ]
        },
      ]),
    });
  });

  await page.goto('/details/red', { waitUntil: "commit" });

  await expect(page.getByText('/ɹɛd/')).toBeVisible();
  await expect(page.getByText('sanguine')).toBeVisible();
  await expect(page.getByText('The drug secobarbital; a capsule of this drug.')).toBeVisible();
  await expect(page.getByText('(of a card) Of the hearts or diamonds suits. Compare black')).toBeVisible();
  await expect(page.getByText('https://en.wiktionary.org/wiki/red')).toBeVisible();
});

test('word not found', async ({ page }) => {

  await page.route('**/details/atlasfsfsd', (route) => {
    route.fulfill({
      status: 404,
      contentType: 'application/json',
      body: JSON.stringify({
        error: "The requested resource was not found.",
      }),
    });
  });

  await page.goto('/', { waitUntil: "commit" });

  await page.locator('.form__input').fill('atlasfsfsd');
  await page.locator('.form__button').click();
  await expect(page).toHaveURL(
    '/details/atlasfsfsd'
  );
  await expect(page.locator('.app__error')).toBeVisible();
});

test('search for atlas', async ({ page }) => {
  await page.goto('/', { waitUntil: "commit" });

  await page.locator('.form__input').fill('atlas');
  await page.locator('.form__button').click();
  await expect(page).toHaveURL('/details/atlas');
  await expect(page.locator('.article-h1')).toHaveText(/atlas/);
  await expect(page.locator('.player-div')).not.toBeVisible();
});

test('word not found error disappears on correct next search', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: "commit" });

  await page.locator('.form__input').fill('atlasfsfsd');
  await page.locator('.form__button').click();
  await expect(page).toHaveURL('/details/atlasfsfsd');
  await expect(page.locator('.app__error')).toBeVisible();
  await page.locator('.form__input').clear();
  await page.locator('.form__input').fill('greet');
  await page.locator('.form__button').click();
  await expect(page).toHaveURL('/details/greet');
  await expect(page.locator('.article-h1')).toHaveText(/greet/);
  await expect(page.locator('.player-div')).toBeVisible();
  await expect(page.locator('.app__error')).not.toBeVisible();
});

test('should display play button initially', async ({ page }) => {
  await page.goto('/details/red');

  const appPlayer = await page.locator('app-player');
  await expect(appPlayer).toBeVisible();

  const ariaLabel = await page.getByTestId('player-status');
  await expect(ariaLabel).toHaveText('Play');
});

test('should toggle aria-label text on play button click', async ({ page }) => {
  await page.goto('/details/red');

  const appPlayer = await page.locator('app-player');
  await expect(appPlayer).toBeVisible();

  const ariaLabel = await page.getByTestId('player-status');
  await expect(ariaLabel).toHaveText('Play');

  await appPlayer.click();

  await expect(ariaLabel).toHaveText('Pause');

  await appPlayer.click();

  await expect(ariaLabel).toHaveText('Play');
});

test('should toggle svgs on play button click', async ({ page }) => {
  await page.goto('/details/red', { waitUntil: "commit" });

  const appPlayer = await page.locator('app-player');
  await expect(appPlayer).toBeVisible();

  const pauseSvg = await page.getByTestId('pause-svg');
  const playSvg = await page.getByTestId('play-svg');

  await appPlayer.click();

  await expect(pauseSvg).toBeVisible();

  await page.waitForTimeout(1500); // Allow UI update

  await expect(playSvg).toBeVisible();
});

test("Playwright chrome recorder test with tweaks", async ({ page }) => {
  await page.setViewportSize({
    width: 640,
    height: 729
  })
  await page.goto("/");
  await page.locator("app-home > div > div input").click();
  await page.locator("app-home > div > div input").fill("red");
  await page.keyboard.press('Enter', { delay: 100 });
  await page.locator("article:nth-of-type(1) svg").click();
  await page.locator("span.Toggle__display").click();
  await page.locator("#font").click();
  await page.locator('#font').selectOption({ label: 'Sans-Serif' });
  await page.locator("div.nav__left svg").click();
});