import { Page } from "@playwright/test";
import CommonActions from "../utils/CommonActions";

export default class logoutPage {
  private page: Page;
  private actions: CommonActions;
  constructor(page: Page) {
    this.page = page;
    this.actions = new CommonActions(page);
  }

  async logout() {
    this.actions.click("#react-burger-menu-btn");
    this.actions.click("#logout_sidebar_link");
  }
}
