import { Selector, t } from "testcafe";

class HomePage {
    constructor() {

        this.Finder = Selector('#nclood-nav > div.top-nav-container.pin > div.top-nav > div > div.search-flex > button > span');

    }


}

export default new HomePage();