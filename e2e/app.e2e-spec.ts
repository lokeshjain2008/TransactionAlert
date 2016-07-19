import { TransactionAlertPage } from './app.po';

describe('transaction-alert App', function() {
  let page: TransactionAlertPage;

  beforeEach(() => {
    page = new TransactionAlertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
