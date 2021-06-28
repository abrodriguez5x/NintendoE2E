import { Selector, t } from "testcafe";

class HomePage {
    constructor() {

        this.Finder = Selector('#nclood-nav > div.top-nav-container.pin > div.top-nav > div > div.search-flex > button > span');
        this.GamesButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-gamestore > button').withText('Games');
        this.ShopOption = Selector('#nclood-nav > div.top-nav-container.pin.expanded > nav > ul > li.nav-gamestore.active > div > div.expanded-nav-gamestore.active > div > div > a:nth-child(1) > svg');
        this.HardwareButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-gamestore > button').withText('Hardware');
        this.HardwareOption = Selector('#nclood-nav > div.top-nav-container.pin.expanded > nav > ul > li.nav-switch.active > div > div.expanded-nav-switch.active > div > div > a.switch-system.large > div').withText('Nintendo Switch Lineup');
        this.NewsButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-newsevents > a > button').withText('News & Events');

    }

    get nintendoPlay() {
        return Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-playnintendo > a > button');
    }

}

export default new HomePage();