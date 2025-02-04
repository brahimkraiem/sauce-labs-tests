import { test } from "@playwright/test";
import PomManager from "../pages/PomManager";

let pm: PomManager;
test.beforeEach(({ page }) => {
  pm = new PomManager(page);
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test("Logout tests", async () => {
  await pm.loginPage.navigate();
  await pm.loginPage.login("standard_user", "secret_sauce");
  await pm.logoutPage.logout();
  await pm.loginPage.asserUrlPage("https://www.saucedemo.com/");
});
