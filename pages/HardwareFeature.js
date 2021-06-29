import { Selector, t } from "testcafe";

class HardwareFeature {
    constructor() {

        this.HardwareButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-switch > button > svg.nav-btn-icon')
        this.HardwareOption = Selector('#nclood-nav > div.top-nav-container.pin.expanded > nav > ul > li.nav-switch.active > div > div.expanded-nav-switch.active > div > div > a.switch-system.large > div').withText('Nintendo Switch Lineup');
        this.NewsButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-newsevents > a > button').withText('News & Events');

    }


}

export default new HardwareFeature();