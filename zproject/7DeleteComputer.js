const { browser, element } = require("protractor");
const testData=require("./data.json");

describe("Suite Delete", function () {
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

  it("Delete Computer", async function () {
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

    element(by.css(locSearchTextBox_CSS)).sendKeys("ASCI Purple");
    element(by.xpath(locSearchButton_XPath)).click();
    browser.sleep(5000);

    element(by.xpath("//table[@class='computers zebra-striped']//tr/td[1]/a")).click();


     browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elementSaveThisComputerButton), 10000);
      return elementSaveThisComputerButton;
    });


  

    element(by.xpath("//input[@value='Delete this computer']")).click();

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
      `Done ! Computer ASCI Purple has been deleted`
    );


  

  });
});

/*
       
*/

