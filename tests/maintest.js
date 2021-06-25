import { Selector } from 'testcafe'

const searchButton = Selector('#nclood-nav > div.top-nav-container.pin > div.top-nav > div > div.search-flex > button > span');
const searchInput = Selector('#search-input');


fixture("Main Fixture")
    .page("https://www.nintendo.com/");

test("First Test", async t => {
    await t
        .click(searchButton)
        .typeText(searchInput, "Zelda")
        .pressKey('enter');





});