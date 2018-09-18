import { element, browser, by} from 'protractor';

export class HomePage {
	getPage() {
		return browser.get('/');
	}

	getPageTitle() {
		return browser.getTitle();
	}
	getHomePageTag() {
		return element(by.tagName('home-page'));
	  }

}