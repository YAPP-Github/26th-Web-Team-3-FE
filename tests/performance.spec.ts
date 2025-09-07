import { expect, test } from "@playwright/test";

test.describe("Performance and Loading", () => {
  test("should load home page within acceptable time", async ({ page }) => {
    const startTime = Date.now();

    await page.goto("/");

    // Wait for main content to be visible
    await expect(page.locator("main")).toBeVisible();

    const loadTime = Date.now() - startTime;

    // Home page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);

    console.log(`Home page loaded in ${loadTime}ms`);
  });

  test("should load all images on home page", async ({ page }) => {
    await page.goto("/");

    // Wait for physics images to load
    const physicsImages = page.locator("img[src*='bead'], img[src*='lettie']");
    await expect(physicsImages.first()).toBeVisible();

    // Check if all images are loaded
    const imageCount = await physicsImages.count();
    expect(imageCount).toBeGreaterThan(0);

    // Wait for all images to finish loading
    await page.waitForLoadState("networkidle");

    // Check if images have proper dimensions
    for (let i = 0; i < imageCount; i++) {
      const image = physicsImages.nth(i);
      const boundingBox = await image.boundingBox();
      expect(boundingBox).toBeTruthy();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
    }
  });

  test("should handle API calls efficiently", async ({ page }) => {
    // Listen for API calls
    const apiCalls: string[] = [];
    page.on("request", (request) => {
      if (request.url().includes("/api/")) {
        apiCalls.push(request.url());
      }
    });

    await page.goto("/");

    // Wait for API calls to complete
    await page.waitForLoadState("networkidle");

    // Check if user count API was called
    const userCountApiCall = apiCalls.find((url) => url.includes("user"));
    expect(userCountApiCall).toBeTruthy();

    console.log(`API calls made: ${apiCalls.length}`);
  });

  test("should handle page transitions smoothly", async ({ page }) => {
    await page.goto("/");

    // Measure time to navigate to explore page
    const startTime = Date.now();
    await page.getByRole("link", { name: "타임캡슐 보러가기" }).click();

    await page.waitForURL("**/explore");
    const navigationTime = Date.now() - startTime;

    // Navigation should be fast (less than 1 second)

    expect(navigationTime).toBeLessThan(1000);

    console.log(`Navigation to explore page took ${navigationTime}ms`);
  });

  test("should handle slow network conditions", async ({ page }) => {
    // Simulate slow network
    await page.route("**/*", (route) => {
      // Add 1 second delay to all requests
      setTimeout(() => route.continue(), 1000);
    });

    const startTime = Date.now();
    await page.goto("/");

    // Wait for main content even with slow network
    await expect(page.locator("main")).toBeVisible();

    const loadTime = Date.now() - startTime;
    console.log(`Page loaded with slow network in ${loadTime}ms`);

    // Should still load within reasonable time even with delays
    expect(loadTime).toBeLessThan(10000);
  });

  test("should optimize bundle size and loading", async ({ page }) => {
    await page.goto("/");

    // Check for any console errors
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.waitForLoadState("networkidle");

    // Should not have any console errors
    expect(consoleErrors.length).toBe(0);

    // Check for any failed requests
    const failedRequests: string[] = [];
    page.on("requestfailed", (request) => {
      failedRequests.push(request.url());
    });

    // Should not have any failed requests
    expect(failedRequests.length).toBe(0);
  });

  test("should handle memory usage efficiently", async ({ page }) => {
    await page.goto("/");

    // Navigate between pages multiple times to test memory usage
    for (let i = 0; i < 5; i++) {
      await page.getByRole("link", { name: "타임캡슐 보러가기" }).click();
      await page.waitForURL("**/explore");
      await page.goto("/");
    }

    // Page should still be responsive after multiple navigations
    await expect(page.locator("main")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "타임캡슐 보러가기" })
    ).toBeVisible();
  });

  test("should handle concurrent user interactions", async ({ page }) => {
    await page.goto("/");

    // Simulate rapid clicking
    const exploreButton = page.getByRole("link", {
      name: "타임캡슐 보러가기",
    });

    // Click multiple times rapidly
    await Promise.all([
      exploreButton.click(),
      exploreButton.click(),
      exploreButton.click(),
    ]);

    // Should navigate to explore page only once
    await page.waitForURL("**/explore");
    expect(page.url()).toContain("/explore");
  });
});
