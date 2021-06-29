import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import gamesfeature from '../pages/GamesFeature';
import hardwarefeature from '../pages/HardwareFeature';

const URL = 'https://www.nintendo.com/';

const getURL = ClientFunction(() => window.location.href);

fixture("Registration Fixture")
    .page(URL);

test('Assert home page', async t => {
    await t
        .expect(getURL()).eql(URL)

});

test('Games Option Menu', async t => {
    await t
        .click(gamesfeature.GamesButton)
        .click(gamesfeature.ShopOption)

});