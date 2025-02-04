import { test } from "@playwright/test";
import PomManager from "../pages/PomManager";

let pm: PomManager;
test.beforeEach(async ({ page }) => {
  pm = new PomManager(page);
  await pm.loginPage.navigate();
  await pm.loginPage.login("standard_user", "secret_sauce");
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test.describe("Home page tests", () => {
  test("Display products lists test", async () => {
    await pm.homePage.assertItems('[data-test="inventory-item"]', 6);
  });

  test.only("Sort products lists by name ascending test", async () => {
    await pm.homePage.filterItems("za");
    await pm.homePage.filterItems("az");
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "Sauce Labs Backpack"
    );
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "$29.99"
    );
  });
  test("Sort products lists by name descending test", async () => {
    await pm.homePage.filterItems("za");
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "Test.allTheThings() T-Shirt (Red)"
    );

    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "$15.99"
    );
  });

  test("Sort products lists by price ascending  test", async () => {
    await pm.homePage.filterItems("lohi");
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "Sauce Labs Onesie"
    );
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "$7.99"
    );
  });
  test.only("Sort products lists by price descending  test", async () => {
    await pm.homePage.filterItems("hilo");
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "Sauce Labs Fleece Jacket"
    );
    await pm.homePage.asserContentText(
      '[data-test="inventory-list"]:first-child',
      "$49.99"
    );
  });

  test("Add item to cart test", async () => {
    await pm.homePage.addItemToCart();
    await pm.homePage.navigateToAllProcucts();
    await pm.homePage.assertItems('[data-test="inventory-item"]', 1);
  });

  test("Remove item from cart test", async () => {
    await pm.homePage.addItemToCart();
    await pm.homePage.navigateToAllProcucts();
    await pm.homePage.deleteItemFromCart();

    await pm.homePage.assertItems('[data-test="inventory-item"]', 0);
  });
  test("Redirect to home page test", async () => {
    await pm.homePage.navigateToAllProcucts();
    await pm.homePage.redirectToHomePage();
    await pm.homePage.assertUrlPage();
  });
});
