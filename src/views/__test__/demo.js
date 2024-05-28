require("chromedriver");
const {By, Builder} = require('selenium-webdriver');

export async function run(speed){
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().setTimeouts({ implicit: speed });
  await driver.get("http://localhost:5173/");

  let next = await driver.findElement(By.id("next-button"))
  
  while (!next.getAttribute(disabled)) {
    next.click();
  }

  await driver.quit();
}