import CommonActions from "../utils/CommonActions";
import { Page, expect } from "@playwright/test";

export default class LoginPage {
  private page: Page;
  private actions: CommonActions;
  constructor(page: Page) {
    this.page = page;
    this.actions = new CommonActions(page);
  }
  async navigate() {
    await this.actions.navigate("https://www.saucedemo.com/");
  }
  async login(username: string, password: string): Promise<void> {
    await this.actions.fill("#user-name", username);
    await this.actions.fill("#password", password);
    await this.actions.click("#login-button");
  }
  async asserUrlPage(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }
  async getErrorMessage() {
    return await this.actions.getText('[data-test="error"]');
  }
  async asserErrorMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.getErrorMessage();
    await expect(actualMessage).toContain(expectedMessage);
  }
}
