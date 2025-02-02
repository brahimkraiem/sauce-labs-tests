export default class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  async click(selector) {
    await this.page.click(selector);
  }
}
