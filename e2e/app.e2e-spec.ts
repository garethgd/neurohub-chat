import { NeuroHubPage } from './app.po';

describe('neuro-hub App', () => {
  let page: NeuroHubPage;

  beforeEach(() => {
    page = new NeuroHubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
