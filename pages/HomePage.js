import { Selector, t } from "testcafe";

class HomePage {
    constructor() {

        this.Finder = Selector('#nclood-nav > div.top-nav-container.pin > div.top-nav > div > div.search-flex > button > span');

    }

    get nintendoPlay() {
        return Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-playnintendo > a > button');
    }

}

export default new HomePage();