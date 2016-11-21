import { BrioisGalloisPage } from './app.po';

describe('briois-gallois App', function() {
  let page: BrioisGalloisPage;

  beforeEach(() => {
    page = new BrioisGalloisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bbmg works!');
  });
});
