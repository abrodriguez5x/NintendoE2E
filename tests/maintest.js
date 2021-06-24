fixture("Main Fixture")
    .page("https://www.nintendo.com/")

test("First Test", async t => {
    await t
        .click('#nclood-nav > div.top-nav-container.pin > div.top-nav > div > div.search-flex > button > span')
        .typeText('#search-input', "Zelda")
        .pressKey('enter')





})