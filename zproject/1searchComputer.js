const { browser, element } = require("protractor");

describe("Suite Search", function () {
 
  beforeAll(() => {
    console.log("Before All Called");
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().setScriptTimeout(20000);
  });

  it("Search Using Computer Name", function () {

    browser.get("http://computer-database.gatling.io/computers");

    var EC = protractor.ExpectedConditions;
    let elemSearchTextBox = element(by.css("input#searchbox"));

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemSearchTextBox), 10000);
      return elemSearchTextBox;
    });

    element(by.css("input#searchbox")).sendKeys("ACE");
    element(by.xpath("//input[@id='searchsubmit']")).click();

    browser.sleep(5000);

    console.log("Printing computer Name");
    element
      .all(by.xpath("//table[@class='computers zebra-striped']//tr/td[1]"))
      .each((ele, index) => {
        if (ele != undefined) {
          ele.getText().then((text) => {
            console.log("Computer Name at index " + index + " is: " + text);
          });
        }
      });
  });
});


/*
    $ protractor conf.js  --specs='zproject/1searchComputer.js'
    [10:56:28] I/launcher - Running 1 instances of WebDriver
    [10:56:28] I/direct - Using ChromeDriver directly...
    Started
    Before All Called
    Printing computer Name
    Computer Name at index 0 is: ACE
    Computer Name at index 1 is: Acer Extensa
    Computer Name at index 2 is: Acer Extensa 5220
    Computer Name at index 3 is: Acer Iconia
    Computer Name at index 4 is: Meiko Computing Surface
    Computer Name at index 5 is: Pilot ACE
    .


    1 spec, 0 failures
    Finished in 7.739 seconds

    [10:56:37] I/launcher - 0 instance(s) of WebDriver still running
    [10:56:37] I/launcher - chrome #01 passed
*/

