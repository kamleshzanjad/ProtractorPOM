const { browser, element } = require("protractor");

describe("Suite Search", function () {
  let url = "http://computer-database.gatling.io/computers";
  let locSearchTextBox_CSS = "input#searchbox";
  let locSearchButton_XPath = "//input[@id='searchsubmit']";
  let locComputerFound_XPath = "//h1[contains(text(), 'computers found'  )]";

  beforeAll(() => {
    console.log("Before All Called");
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().setScriptTimeout(20000);
  });

  it("Search Using Computer Name IBM", async function () {
    browser.get(url);

    var EC = protractor.ExpectedConditions;
    let elemSearchTextBox = element(by.css(locSearchTextBox_CSS));
    let elemComputerFound = element(by.xpath(locComputerFound_XPath));

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemSearchTextBox), 10000);
      return elemSearchTextBox;
    });

    element(by.css(locSearchTextBox_CSS)).sendKeys("IBM");
    element(by.xpath(locSearchButton_XPath)).click();

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemComputerFound), 10000);
      return elemComputerFound;
    });

    browser.sleep(5000);

    console.log("Printing computer Name");
    let numberOfComputerFoundHeading = await element(by.xpath(locComputerFound_XPath)).getText()
    console.log(numberOfComputerFoundHeading);
    let n = numberOfComputerFoundHeading.replace(" computers found", "").trim()
    n = parseInt(n)
    console.log(n + "   is search result count");

  });
});

/*
        $ protractor conf.js  --specs='zproject/3searchComputerAsyncAwait.js'
    [11:42:06] I/launcher - Running 1 instances of WebDriver
    [11:42:06] I/direct - Using ChromeDriver directly...
    Started
    Before All Called
    Printing computer Name
    25 computers found
    25   is search result count
*/

