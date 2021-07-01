import { Selector, t } from "testcafe";

class HardwareFeature {
    constructor() {

        this.HardwareBanner = Selector('#general-wrapper-7d345117-f9c9-3986-a994-a00593f1ab6c > div > div > div > h1 > img:nth-child(1)');

        this.HardwareButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-switch > button > svg.nav-btn-icon')
        this.HardwareOption = Selector('#nclood-nav > div.top-nav-container.pin.expanded > nav > ul > li.nav-switch.active > div > div.expanded-nav-switch.active > div > div > a.switch-system.large > div').withText('Nintendo Switch Lineup');


    }


}

export default new HardwareFeature();