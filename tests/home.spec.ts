import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
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

  test("should display home page with all main sections", async ({ page }) => {
    // Check if main sections are visible
    await expect(page.locator("main")).toBeVisible();

    // Check if title section is present
    await expect(page.locator("h1")).toBeVisible();

    // Check if button section is present
    await expect(
      page.getByRole("button", { name: "타임캡슐 보러가기" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "타임캡슐 만들기" })
    ).toBeVisible();

    // Check if physics container is present
    await expect(page.locator("[class*='physicsContainer']")).toBeVisible();
  });

  test("should navigate to explore page when clicking explore button", async ({
    page,
  }) => {
    const exploreButton = page.getByRole("button", {
      name: "타임캡슐 보러가기",
    });
    await exploreButton.click();

    // Wait for navigation
    await page.waitForURL("**/explore");
    expect(page.url()).toContain("/explore");
  });

  test("should navigate to create capsule page when clicking create button", async ({
    page,
  }) => {
    const createButton = page.getByRole("button", { name: "타임캡슐 만들기" });
    await createButton.click();

    // Wait for navigation
    await page.waitForURL("**/create-capsule");
    expect(page.url()).toContain("/create-capsule");
  });

  test("should display user count in caption section", async ({ page }) => {
    // Wait for the user count to be loaded
    await page.waitForTimeout(2000);

    // Check if user count is displayed (it should be a number)
    const userCountElement = page.locator("text=/\\d+/").first();
    await expect(userCountElement).toBeVisible();
  });

  test("should have interactive physics elements", async ({ page }) => {
    // Check if physics images are loaded
    const physicsImages = page.locator("img[src*='bead']");
    await expect(physicsImages.first()).toBeVisible();

    // Check if physics container has multiple images
    const imageCount = await physicsImages.count();
    expect(imageCount).toBeGreaterThan(0);
  });

  test("should have floating stars animation", async ({ page }) => {
    // Check if floating stars container is present
    await expect(page.locator("[class*='floating-stars']")).toBeVisible();
  });

  test("should be responsive on different screen sizes", async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("main")).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator("main")).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator("main")).toBeVisible();
  });
});
