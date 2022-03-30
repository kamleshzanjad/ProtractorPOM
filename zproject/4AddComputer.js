const { browser, element } = require("protractor");

describe("Suite Create", function () {
  let url = "http://computer-database.gatling.io/computers";
  let locSearchTextBox_CSS = "input#searchbox";
  let locSearchButton_XPath = "//input[@id='searchsubmit']";
  let locComputerFound_XPath = "//h1[contains(text(), 'computers found'  )]";

  let locAddComputerButton = "//a[text()='Add a new computer']";
  let locCreateThisComputerButton = "//input[@value='Create this computer']";

  beforeAll(() => {
    console.log("Before All Called");
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().setScriptTimeout(20000);
  });

  it("Add Computer", async function () {
    browser.get(url);

    var EC = protractor.ExpectedConditions;
    let elemSearchTextBox = element(by.css(locSearchTextBox_CSS));
    let elemComputerFound = element(by.xpath(locComputerFound_XPath));
    let elementCreateThisComputerButton = element(
      by.xpath(locCreateThisComputerButton)
    );

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemSearchTextBox), 10000);
      return elemSearchTextBox;
    });

    element(by.xpath(locAddComputerButton)).click();

    // always check visibility when pages changes.
    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elementCreateThisComputerButton), 10000);
      return elementCreateThisComputerButton;
    });

    element(by.name("name")).sendKeys("Demo Computer Name");
    element(by.id("introduced")).sendKeys("2021-12-30");
    element(by.id("discontinued")).sendKeys("2025-10-20");
    element(by.cssContainingText("option", "Moore School of ")).click();
    //  Moore School of Electrical Engineering

    elementCreateThisComputerButton.click();

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
      "Done ! Computer Demo Computer Name has been created"
    );

    //purposely add fault adding .... to fail this assertion
    expect(alertMessage).toEqual(
      "Done ! Computer Demo Computer Name has been created...."
    );
  });
});

/*
        $ protractor conf.js  --specs='zproject/4AddComputer.js'
    [12:04:21] I/launcher - Running 1 instances of WebDriver
    [12:04:21] I/direct - Using ChromeDriver directly...
    Started
    Before All Called
    Printing Alert Message
    Done ! Computer Demo Computer Name has been created
    F

    Failures:
    1) Suite Search Add Computer
      Message:
        Expected 'Done ! Computer Demo Computer Name has been created' to equal 'Done ! Computer Demo Computer Name has been created....'.
      Stack:
        Error: Failed expectation
            at UserContext.<anonymous> (/Users/kzanjad/Documents/ProtractorTraining/ProtractorProject/zproject/4AddComputer.js:73:26)
            at processTicksAndRejections (internal/process/task_queues.js:97:5)   
*/
