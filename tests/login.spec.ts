import { test } from "@playwright/test";
import PomManager from "../pages/PomManager";

let pm: PomManager;
test.beforeEach(async ({ page }) => {
  pm = new PomManager(page);
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe("Login tests", () => {
  test("Login with valid credentials", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
    await pm.loginPage.asserUrlPage("https://www.saucedemo.com/inventory.html");
  });

  test("Login with invalid credentials", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("test", "test");
    await pm.loginPage.asserErrorMessage("Epic sadface: Username and password do not match any user in this service");
  });
});
