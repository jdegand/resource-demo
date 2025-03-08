# Resource Demo

This is reworked from my [Angular Dictionary 17 App](https://github.com/jdegand/angular-17-dictionary-app).  I replicated the project in a more modern and maintainable Angular style.

import { expect, test } from '@playwright/test';

test('Mock API request to /details/red route', async ({ page }) => {

  // Intercept the API request
  await page.route('**/details/red', (route) => {
    // Mocked API response
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

  // Navigate to the application
  await page.goto('http://localhost:4200');

  // Fill the input and trigger the request
  await page.getByRole('textbox').fill('red');
  await page.getByRole('button').click();

  // Verify the API response is reflected in the UI
  await expect(page).toHaveURL('http://localhost:4200/details/red'); // Ensure proper navigation
  await expect(page.getByText('sanguine')).toBeVisible();
  await expect(
    page.getByText('One of the 15 red balls used in snooker, distinguished from the colours.')
  ).toBeVisible();
  
  // check the sourceUrl
  const link = await page.locator('.article__source__row__link');
  const href = await link.getAttribute('href');

  expect(href).toBe('https://en.wiktionary.org/wiki/red');

  await link.click();
  await expect(page).toHaveURL('https://en.wiktionary.org/wiki/red');
});
