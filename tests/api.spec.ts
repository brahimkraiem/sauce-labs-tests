import { expect, test } from "@playwright/test";
import allProducts from "../test_data/products.json";
import product from "../test_data/product.json";
import newProduct from "../test_data/new_product.json";

test.describe("API tests", () => {
  test("Verify get all products list", async ({ request }) => {
    const response = await request.get("https://dummyjson.com/products");

    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toEqual(allProducts);
  });

  test("Verify get single product", async ({ request }) => {
    const response = await request.get("https://dummyjson.com/products/1");

    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toEqual(product);
  });

  test("Verify add product", async ({ request }) => {
    const response = await request.post("https://dummyjson.com/products/add", {
      data: newProduct,
    });

    const responseBody = await response.json();

    expect(response.status()).toBe(201);
    expect(responseBody.id).toBeGreaterThan(30);
    expect(responseBody.title).toBe("Maillot");
  });

  test("Verify update product", async ({ request }) => {
    const response = await request.put("https://dummyjson.com/products/1", {
      data: { title: "Parfum Dior" },
    });

    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.title).toBe("Parfum Dior");
  });

  test.only("Verify delete product", async ({ request }) => {
    const response = await request.delete("https://dummyjson.com/products/1");

    expect(response.status()).toBe(200);
  });
});
