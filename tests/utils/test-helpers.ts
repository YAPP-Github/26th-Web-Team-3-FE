import { Page, expect } from "@playwright/test";

export class TestHelpers {
  static async waitForPageLoad(page: Page) {
    await page.waitForLoadState("networkidle");
    await page.waitForSelector("main", { state: "visible", timeout: 15000 });
  }

  static async navigateToHome(page: Page) {
    await page.goto("/");
    await this.waitForPageLoad(page);
  }

  static async navigateToExplore(page: Page) {
    await page.getByRole("button", { name: "타임캡슐 보러가기" }).click();
    await page.waitForURL("**/explore");
    await this.waitForPageLoad(page);
  }

  static async navigateToCreateCapsule(page: Page) {
    await page.getByRole("button", { name: "타임캡슐 만들기" }).click();
    await page.waitForURL("**/create-capsule");
    await this.waitForPageLoad(page);
  }

  static async checkMainElementsVisible(page: Page) {
    await expect(page.locator("main")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "타임캡슐 보러가기" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "타임캡슐 만들기" })
    ).toBeVisible();
  }

  static async measurePageLoadTime(page: Page, url: string) {
    const startTime = Date.now();
    await page.goto(url);
    await this.waitForPageLoad(page);
    const loadTime = Date.now() - startTime;
    return loadTime;
  }

  static async checkImagesLoaded(page: Page, selector: string) {
    const images = page.locator(selector);
    await expect(images.first()).toBeVisible();

    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);

    // Wait for all images to load
    await page.waitForLoadState("networkidle");

    return imageCount;
  }

  static async checkConsoleErrors(page: Page) {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.waitForLoadState("networkidle");
    return consoleErrors;
  }

  static async checkFailedRequests(page: Page) {
    const failedRequests: string[] = [];
    page.on("requestfailed", (request) => {
      failedRequests.push(request.url());
    });

    await page.waitForLoadState("networkidle");
    return failedRequests;
  }

  static async simulateSlowNetwork(page: Page, delayMs: number = 1000) {
    await page.route("**/*", (route) => {
      setTimeout(() => route.continue(), delayMs);
    });
  }

  static async setViewportSize(
    page: Page,
    size: "mobile" | "tablet" | "desktop"
  ) {
    const sizes = {
      mobile: { width: 375, height: 667 },
      tablet: { width: 768, height: 1024 },
      desktop: { width: 1920, height: 1080 },
    };

    await page.setViewportSize(sizes[size]);
  }

  static async waitForUserCountToLoad(page: Page, timeoutMs: number = 5000) {
    const startTime = Date.now();

    while (Date.now() - startTime < timeoutMs) {
      const userCountElement = page.locator("text=/\\d+/").first();
      if (await userCountElement.isVisible()) {
        return true;
      }
      await page.waitForTimeout(100);
    }

    return false;
  }

  static async checkPhysicsElements(page: Page) {
    const physicsImages = page.locator("img[src*='bead'], img[src*='lettie']");
    await expect(physicsImages.first()).toBeVisible();

    const imageCount = await physicsImages.count();
    expect(imageCount).toBeGreaterThan(0);

    return imageCount;
  }

  static async checkFloatingStars(page: Page) {
    const starsContainer = page.locator("[class*='floating-stars']");
    await expect(starsContainer).toBeVisible();
  }

  static async testResponsiveDesign(page: Page) {
    const viewports = [
      { name: "mobile", width: 375, height: 667 },
      { name: "tablet", width: 768, height: 1024 },
      { name: "desktop", width: 1920, height: 1080 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await expect(page.locator("main")).toBeVisible();
      console.log(`${viewport.name} viewport test passed`);
    }
  }
}
