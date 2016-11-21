import { browser, element, by } from 'protractor';

export class BrioisGalloisPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bbmg-root h1')).getText();
  }
}
