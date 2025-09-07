import { expect, test } from "@playwright/test";
import { TestHelpers } from "./utils/test-helpers";

test.describe("Comprehensive Application Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // 테스트 시작 전에 인증 쿠키 추가
    await page.context().addCookies([
      {
        name: "accessToken",
        value: "TEST_TOKEN",
        domain: "localhost",
        path: "/",
        httpOnly: true,
        secure: false,
      },
    ]);
  });

  test("Complete user journey - home to explore to create capsule", async ({
    page,
  }) => {
    // Start at home page
    await TestHelpers.navigateToHome(page);
    await TestHelpers.checkMainElementsVisible(page);

    // Check physics elements
    const physicsImageCount = await TestHelpers.checkPhysicsElements(page);
    console.log(`Found ${physicsImageCount} physics images`);

    // Check floating stars
    await TestHelpers.checkFloatingStars(page);

    // Wait for user count to load
    const userCountLoaded = await TestHelpers.waitForUserCountToLoad(page);
    expect(userCountLoaded).toBe(true);

    // Navigate to explore page
    await TestHelpers.navigateToExplore(page);
    expect(page.url()).toContain("/explore");

    // Navigate back to home
    await TestHelpers.navigateToHome(page);
    expect(page.url()).toMatch(/\/$|\/home/);

    // Navigate to create capsule page
    await TestHelpers.navigateToCreateCapsule(page);
    expect(page.url()).toContain("/create-capsule");
  });

  test("Performance and loading tests", async ({ page }) => {
    // Test page load time
    const loadTime = await TestHelpers.measurePageLoadTime(page, "/");
    expect(loadTime).toBeLessThan(3000);
    console.log(`Home page loaded in ${loadTime}ms`);

    // Test image loading
    const imageCount = await TestHelpers.checkImagesLoaded(
      page,
      "img[src*='bead'], img[src*='lettie']"
    );
    expect(imageCount).toBeGreaterThan(0);

    // Test navigation performance
    const startTime = Date.now();
    await TestHelpers.navigateToExplore(page);
    const navigationTime = Date.now() - startTime;
    expect(navigationTime).toBeLessThan(1000);
    console.log(`Navigation took ${navigationTime}ms`);
  });

  test("Error handling and edge cases", async ({ page }) => {
    // Test console errors
    await TestHelpers.navigateToHome(page);
    const consoleErrors = await TestHelpers.checkConsoleErrors(page);
    expect(consoleErrors.length).toBe(0);

    // Test failed requests
    const failedRequests = await TestHelpers.checkFailedRequests(page);
    expect(failedRequests.length).toBe(0);

    // Test 404 page
    await page.goto("/non-existent-page");
    await expect(page.locator("main")).toBeVisible();
  });

  test("Responsive design across all viewports", async ({ page }) => {
    await TestHelpers.navigateToHome(page);
    await TestHelpers.testResponsiveDesign(page);
  });

  test("Memory and performance under load", async ({ page }) => {
    await TestHelpers.navigateToHome(page);

    // Navigate between pages multiple times
    for (let i = 0; i < 5; i++) {
      await TestHelpers.navigateToExplore(page);
      await TestHelpers.navigateToHome(page);
    }

    // Page should still be responsive
    await TestHelpers.checkMainElementsVisible(page);
  });

  test("Keyboard navigation and accessibility", async ({ page }) => {
    await TestHelpers.navigateToHome(page);

    // Test tab navigation
    await page.keyboard.press("Tab");
    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();
  });

  test("Browser compatibility", async ({ page }) => {
    // Test in different viewport sizes
    const viewports = [
      { name: "mobile", width: 375, height: 667 },
      { name: "tablet", width: 768, height: 1024 },
      { name: "desktop", width: 1920, height: 1080 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await TestHelpers.navigateToHome(page);
      await TestHelpers.checkMainElementsVisible(page);
      console.log(`${viewport.name} viewport test completed`);
    }
  });

  test("API integration and data loading", async ({ page }) => {
    // Listen for API calls
    const apiCalls: string[] = [];
    page.on("request", (request) => {
      if (request.url().includes("/api/")) {
        apiCalls.push(request.url());
      }
    });

    await TestHelpers.navigateToHome(page);
    await page.waitForLoadState("networkidle");

    // Check if user count API was called
    const userCountApiCall = apiCalls.find((url) => url.includes("user"));
    expect(userCountApiCall).toBeTruthy();

    console.log(`API calls detected: ${apiCalls.length}`);
  });
});
