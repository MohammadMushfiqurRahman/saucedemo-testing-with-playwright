# Saucedemo Testing with Playwright

This project contains automated tests for the [Sauce Demo](https://www.saucedemo.com/) website using Playwright.

## Scenario

The automated test covers the following scenario:
1. A user logs in with valid credentials.
2. Adds one product to the cart.
3. Verifies the product name in the cart.
4. Logs out.

## Setup

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Install the Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running the tests

To run the tests, use the following command:
```bash
npx playwright test
```

This will run the tests in headless mode. To see the browser, you can use the `--headed` flag:
```bash
npx playwright test --headed
```

## View the test report

After running the tests, you can view the test report using the following command:
```bash
npx playwright show-report
```
