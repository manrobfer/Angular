import { AptitePage } from './app.po';

describe('aptite App', function() {
  let page: AptitePage;

  beforeEach(() => {
    page = new AptitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
