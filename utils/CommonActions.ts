import { Page, expect } from "@playwright/test";

export default class CommonActions {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async fill(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }
  async getText(selector: string) {
    return await this.page.textContent(selector);
  }
  async assertUrlPage(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
  async select(selector: string, value: string): Promise<void> {
    await this.page.selectOption(selector, value);
  }
}
