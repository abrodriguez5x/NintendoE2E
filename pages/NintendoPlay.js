import { Selector, t } from "testcafe";

class NintendoPlay {
    constructor() {



    }

    get nintendoPlay() {
        return Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-playnintendo > a > button');
    }
}