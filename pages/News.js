import { Selector, t } from "testcafe";

class News {
    constructor() {

        this.NewsHeader = Selector('h1').withText("News");

        this.NewsButton = Selector('#nclood-nav > div.top-nav-container.pin > nav > ul > li.nav-newsevents > a > button').withText('News & Events');

    }



}

export default new News();