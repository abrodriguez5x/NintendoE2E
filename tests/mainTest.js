import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import gamesfeature from '../pages/GamesFeature';
import hardwarefeature from '../pages/HardwareFeature';
import newsfeature from '../pages/News';

const URL = 'https://www.nintendo.com/';

const getURL = ClientFunction(() => window.location.href);

fixture("Nintendo WebPage Validation")
    .page(URL);

test('Assert Home Page', async t => {
    await t
        .expect(getURL()).eql(URL)
        .click(homepage.Finder)
        .typeText(homepage.searchInput, 'Mario')
        .pressKey('enter')

});

test('Games Page Validation', async t => {
    await t
        .click(gamesfeature.GamesButton)
        .click(gamesfeature.ShopOption)
        .expect(gamesfeature.Header.exists).ok()


});

test('Hardware Page Validation', async t => {
    await t
        .click(hardwarefeature.HardwareButton)
        .click(hardwarefeature.HardwareOption)
        .expect(hardwarefeature.HardwareBanner.exists).ok()

});

test('News & Events', async t => {
    await t
        .click(newsfeature.NewsButton)
        .expect(newsfeature.NewsHeader.exists).ok()

})