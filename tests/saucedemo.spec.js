const { test, expect } = require('@playwright/test');

test('Sauce Demo E2E Test', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Log in with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add a product to the cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Go to the cart
  await page.click('.shopping_cart_link');

  // Verify the product name in the cart
  const productName = await page.textContent('.inventory_item_name');
  expect(productName).toBe('Sauce Labs Backpack');

  // Log out
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  // Verify that the user is logged out
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});