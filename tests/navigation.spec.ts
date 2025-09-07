import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
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

  test("should navigate between main pages", async ({ page }) => {
    // Test navigation to explore page
    await page.getByRole("link", { name: "타임캡슐 보러가기" }).click();
    await page.waitForURL("**/explore");
    expect(page.url()).toContain("/explore");

    // Test navigation to create capsule page
    await page.goto("/");
    await page.getByRole("link", { name: "타임캡슐 만들기" }).click();
    await page.waitForURL("**/create-capsule");
    expect(page.url()).toContain("/create-capsule");
  });

  test("should handle browser back and forward navigation", async ({
    page,
  }) => {
    // Navigate to explore page
    await page.getByRole("link", { name: "타임캡슐 보러가기" }).click();
    await page.waitForURL("**/explore");

    // Go back to home page
    await page.goBack();
    await page.waitForURL("**/");
    expect(page.url()).toMatch(/\/$|\/home/);

    // Go forward to explore page
    await page.goForward();
    await page.waitForURL("**/explore");
    expect(page.url()).toContain("/explore");
  });

  test("should maintain page state during navigation", async ({ page }) => {
    // Navigate to explore page
    await page.getByRole("link", { name: "타임캡슐 보러가기" }).click();
    await page.waitForURL("**/explore");

    // Check if explore page loads properly
    await expect(page.locator("main")).toBeVisible();

    // Navigate back to home
    await page.goto("/");

    // Check if home page still works properly
    await expect(page.locator("main")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "타임캡슐 보러가기" })
    ).toBeVisible();
  });

  test("should handle direct URL navigation", async ({ page }) => {
    // Test direct navigation to explore page
    await page.goto("/explore");
    await expect(page.locator("main")).toBeVisible();

    // Test direct navigation to create capsule page
    await page.goto("/create-capsule");
    await expect(page.locator("main")).toBeVisible();

    // Test direct navigation to my capsule page
    await page.goto("/my-capsule");
    // This might redirect to login if not authenticated
    const currentUrl = page.url();
    if (currentUrl.includes("/login")) {
      console.log("My capsule page requires authentication");
    } else {
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("should handle 404 page for invalid routes", async ({ page }) => {
    // Navigate to a non-existent page
    await page.goto("/non-existent-page");

    // Should show 404 page
    await expect(page.locator("main")).toBeVisible();

    // Check if there's a way to go back to home
    const homeLink = page.getByRole("link", { name: /홈|home/i });
    if (await homeLink.isVisible()) {
      await homeLink.click();
      await page.waitForURL("**/");
      expect(page.url()).toMatch(/\/$|\/home/);
    }
  });

  test("should handle tab navigation and keyboard shortcuts", async ({
    page,
  }) => {
    // Test tab navigation through interactive elements
    await page.keyboard.press("Tab");

    // Check if focus moves to the first interactive element
    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();

    // Test tab navigation through multiple elements
    await page.keyboard.press("Tab");

    // Test Enter key on focused button
    await page.keyboard.press("Enter");

    // Should navigate to the target page
    await page.waitForURL("**/explore");
    expect(page.url()).toContain("/explore");
  });

  test("should handle mobile navigation", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Test navigation on mobile
    await page.getByRole("link", { name: "타임캡슐 보러가기" }).click();
    await page.waitForURL("**/explore");
    expect(page.url()).toContain("/explore");

    // Test back navigation on mobile
    await page.goBack();
    await page.waitForURL("**/");
    expect(page.url()).toMatch(/\/$|\/home/);
  });
});
