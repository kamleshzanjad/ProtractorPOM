const { browser, element } = require("protractor");
var HomePage = require("../pages/HomePage");
var CommonOperationPage = require("../pages/CommonOperationPage")

describe("Suite Search", function () {
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

  it("Search Using Computer Name", async function () {
    

    await HomePage.navigateToApplication(url);
    await HomePage.waitForSearchButton()

    await HomePage.setSearchText("ACE");
    await HomePage.clickSearchButton();


    //CommonOperationPage.waitForSomeStaticTime(5000);

    console.log("\n Printing First computer Name");
    let nameOfFirstComputer= await HomePage.getComputerName();
    console.log("Using method getComputerName: nameOfFirstComputer=>  " + nameOfFirstComputer);

    console.log("\n Printing Second computer Name");
    let nameOfSecondComputer= await HomePage.getComputerName2();
    console.log("Using method getComputerName2: nameOfSecondComputer =>   " + nameOfSecondComputer);

    console.log("\n Printing All computer Name");
    let listOfComputerNames= await HomePage.getListOfComputerName()
     console.log("Using method getListOfComputerName:  " + listOfComputerNames);
   
  });
});


/*

      $ protractor conf.js  --specs='zprojectPageObjectModel/testcases/1searchComputer.js'
      [14:29:09] I/launcher - Running 1 instances of WebDriver
      [14:29:09] I/direct - Using ChromeDriver directly...
      Started
      Before All Called
      Inside method CommonOperationPage.setUpBrowser
      Inside method HomePage.navigateToApplication
      Inside method HomePage.waitForSearchButton
      Inside method HomePage.setSearchText
      Inside method HomePage.clickSearchButton

      Printing First computer Name
      Inside method HomePage.getComputerName
      Using method getComputerName: nameOfFirstComputer=>  ACE

      Printing Second computer Name
      Inside method HomePage.getComputerName2
      Using method getComputerName2: nameOfSecondComputer =>   Acer Extensa

      Printing All computer Name
      Inside method HomePage.getListOfComputerName
      Using method getListOfComputerName:  ACE,Acer Extensa,Acer Extensa 5220,Acer Iconia,Meiko Computing Surface,Pilot ACE
      .


      1 spec, 0 failures
      Finished in 2.577 seconds

      [14:29:13] I/launcher - 0 instance(s) of WebDriver still running
      [14:29:13] I/launcher - chrome #01 passed
    
*/

