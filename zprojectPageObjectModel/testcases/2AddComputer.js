const { browser, element } = require("protractor");
var HomePage = require("../pages/HomePage");
var CommonOperationPage = require("../pages/CommonOperationPage");
var CreateComputerPage = require("../pages/CreateComputerPage")

const testData=require("./data.json");

describe("Suite Create", function () {
  let url ="http://computer-database.gatling.io/computers";
 
  // beforeAll(async () => {
  //   console.log("Before All Called");
  //   await CommonOperationPage.setUpBrowser();
  // });

  beforeAll(() => {
    console.log("Before All Called");
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().setScriptTimeout(20000);
  });

  it("Create Computer Name", async function () {
    
    await HomePage.navigateToApplication(url);
    await HomePage.waitForSearchButton();
    await HomePage.clickAddComputerButton();

    await CreateComputerPage.waitForCreateThisComputerButton();

    await CreateComputerPage.setComputerNameText(testData.computerName);
    await CreateComputerPage.setIntroducedDateText(testData.introduced);
    await CreateComputerPage.setDiscontinuedDateText(testData.discontinued);
    await CreateComputerPage.selectCompanyType(testData.company);
    await CommonOperationPage.waitForSomeStaticTime(5000);
    await CreateComputerPage.clickCreateThisComputerButton();
    await CommonOperationPage.waitForSomeStaticTime(5000);

    
    await HomePage.waitForAlertMessage()
  
    CommonOperationPage.waitForSomeStaticTime(5000);

    console.log("Printing Alert Message");
    let alertMessage = await HomePage.getAlertMessage();
    console.log(alertMessage);

    expect(alertMessage).toEqual(
      `Done ! Computer ${testData.computerName} has been created`
    );

  });
});

/*
  
    $ protractor conf.js  --specs='zprojectPageObjectModel/testcases/2AddComputer.js'
    [15:11:51] I/launcher - Running 1 instances of WebDriver
    [15:11:51] I/direct - Using ChromeDriver directly...
    Started
    Before All Called
    Inside method HomePage.navigateToApplication
    Inside method HomePage.waitForSearchButton
    Inside method HomePage.clickAddComputerButton
    Inside method HomePage.waitForCreateThisComputerButton
    Inside method HomePage.setComputerNameText
    Inside method HomePage.setIntroducedDateText
    Inside method HomePage.setDiscontinuedDateText
    Inside method HomePage.clickSearchButton
    Inside method CommonOperationPage.waitForSomeStaticTime
    Inside method HomePage.clickCreateThisComputerButton
    Inside method CommonOperationPage.waitForSomeStaticTime
    Inside method HomePage.waitForAlertMessage
    Inside method CommonOperationPage.waitForSomeStaticTime
    Printing Alert Message
    Inside method HomePage.getAlertMessage
    Done ! Computer Demo Name 1 has been created
    .


    1 spec, 0 failures
    Finished in 10.377 seconds
*/
