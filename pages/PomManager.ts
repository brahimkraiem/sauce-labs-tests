import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import { Page } from "@playwright/test";
import logoutPage from "./LogoutPage";

export default class PomManager {
  public page: Page;
  public loginPage: LoginPage;
  public homePage: HomePage;
  public logoutPage: logoutPage;
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.logoutPage = new logoutPage(page);
    this.homePage = new HomePage(page);
  }
}
