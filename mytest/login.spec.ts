import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("login test", async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  //   const page: Page = await browser.newPage();
  //   browser context #1
  const browserContext1: BrowserContext = await browser.newContext();
  const page1: Page = await browserContext1.newPage();

  //   browser context #2
  const browserContext2: BrowserContext = await browser.newContext();
  const page2: Page = await browserContext2.newPage();

  //   browser 1
  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId1: Locator = await page1.locator("#input-email");
  const password1: Locator = await page1.locator("#input-password");
  const LoginButton1: Locator = await page1.locator("[value = 'Login']");

  await emailId1.fill("mdimranhsn14@gmail.com");
  await password1.fill("Imran1994");
  await LoginButton1.click();

  // browser 2
  //   browser 1
  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId2: Locator = await page2.locator("#input-email");
  const password2: Locator = await page2.locator("#input-password");
  const LoginButton2: Locator = await page2.locator("[value = 'Login']");

  await emailId2.fill("akd@gmail.com");
  await password2.fill("Imran1994");
  await LoginButton2.click();

  await browserContext1.close();
  await browserContext2.close();

  browser.close();
  await new Promise(() => {});

  //   const title = await page1.title();
  //   console.log("home page1 title: ", title);

  //   await page1.screenshot({
  //     path: "homepage.png",
  //   });

  //   expect(title).toEqual("My Account");
});
