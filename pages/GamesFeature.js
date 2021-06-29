import { Selector, t } from "testcafe";

class GamesFeature {
    constructor() {


        this.GamesButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-gamestore > button').withText('Games');
        this.ShopOption = Selector('#nclood-nav > div.top-nav-container.pin.expanded > nav > ul > li.nav-gamestore.active > div > div.expanded-nav-gamestore.active > div > div > a:nth-child(1) > svg');


    }


}

export default new GamesFeature();