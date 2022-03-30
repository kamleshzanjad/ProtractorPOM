const { browser, element } = require("protractor");
const testData=require("./data.json");

describe("Suite Update", function () {
  let url = "http://computer-database.gatling.io/computers";
  let locSearchTextBox_CSS = "input#searchbox";
  let locSearchButton_XPath = "//input[@id='searchsubmit']";
  let locComputerFound_XPath = "//h1[contains(text(), 'computers found'  )]";

  let locAddComputerButton = "//a[text()='Add a new computer']";
  let locSaveThisComputerButton = "//input[@value='Save this computer']";

  beforeAll(() => {
    console.log("Before All Called");
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().setScriptTimeout(20000);
  });

  it("Update Computer", async function () {
    browser.get(url);

    var EC = protractor.ExpectedConditions;
    let elemSearchTextBox = element(by.css(locSearchTextBox_CSS));
    let elemComputerFound = element(by.xpath(locComputerFound_XPath));
    let elementSaveThisComputerButton = element(
      by.xpath(locSaveThisComputerButton)
    );

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemSearchTextBox), 10000);
      return elemSearchTextBox;
    });

    element(by.css(locSearchTextBox_CSS)).sendKeys("ARRA");
    element(by.xpath(locSearchButton_XPath)).click();
    browser.sleep(5000);

    element(by.xpath("//table[@class='computers zebra-striped']//tr/td[1]/a")).click();


     browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elementSaveThisComputerButton), 10000);
      return elementSaveThisComputerButton;
    });


    element(by.name("name")).sendKeys(testData.computerName+" Updated");
    element(by.id("introduced")).sendKeys(testData.introduced);
    element(by.id("discontinued")).sendKeys(testData.discontinued);
    element(by.cssContainingText("option", testData.company)).click();
    //  Moore School of Electrical Engineering

    elementSaveThisComputerButton.click();

    let elementAlert = element(
      by.xpath("//div[@class='alert-message warning']")
    ); //Done ! Computer Demo has been created

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elementAlert), 10000);
      return elementAlert;
    });

    browser.sleep(5000);

    console.log("Printing Alert Message");
    let alertMessage = await elementAlert.getText();
    console.log(alertMessage);

    expect(alertMessage).toEqual(
      `Done ! Computer ARRA${testData.computerName} Updated has been updated`
    );

   //Done ! Computer ARRADemo Computer Name 1 Updated has been updated

  

  });
});

/*
      $ protractor conf.js  --specs='zproject/6UpdateComputer.js'
      [12:30:09] I/launcher - Running 1 instances of WebDriver
      [12:30:09] I/direct - Using ChromeDriver directly...
      Started
      Before All Called
      Printing Alert Message
      Done ! Computer ARRADemo Computer Name 1 Updated has been updated
*/

