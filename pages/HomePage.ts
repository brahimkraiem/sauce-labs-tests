import { Page, expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions";

export default class HomePage {
  private page: Page;
  private actions: CommonActions;
  constructor(page: Page) {
    this.page = page;
    this.actions = new CommonActions(page);
  }

  async addItemToCart(): Promise<void> {
    await this.actions.click("#add-to-cart-sauce-labs-backpack");
  }

  async deleteItemFromCart(): Promise<void> {
    await this.actions.click('[data-test="remove-sauce-labs-backpack"]');
  }
  async navigateToAllProcucts(): Promise<void> {
    await this.actions.click('[data-test="shopping-cart-link"]');
  }

  async assertItems(selector: string, count: number): Promise<void> {
    await expect(this.page.locator(selector)).toHaveCount(count);
  }
  async redirectToHomePage(): Promise<void> {
    await this.actions.click('[data-test="continue-shopping"]');
  }
  async assertUrlPage(): Promise<void> {
    await this.actions.assertUrlPage(
      "https://www.saucedemo.com/inventory.html"
    );
  }
  async asserContentText(selector: string, text: string): Promise<void> {
    await expect(this.page.locator(selector)).toContainText(text);
  }
  async filterItems(value: string): Promise<void> {
    await this.actions.select('[data-test="product-sort-container"]', value);
  }
}
