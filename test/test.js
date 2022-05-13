const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/");

   // setInterval(function(){}, 10000);

  //  await driver.findElement(By.name("input")).sendKeys("test");
  //  await driver.findElement(By.name("textbox")).sendKeys("test");
    await driver.findElement(By.partialLinkText('Search')).click();


   setInterval(function(){driver.quit();}, 10000);

}

test_case();